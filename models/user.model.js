const db = require('../utils/database.js');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;
const PASSWORD_SAV = process.env.PASSWORD_SAV;

function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

module.exports = class User {
    constructor(user) {
        this.id_usr = user.id_usr;
        this.usr_firstname = user.usr_firstname;
        this.usr_lastname = user.usr_lastname;
        this.usr_email = user.usr_email;
        this.usr_password = user.usr_password;
        this.usr_birthDate = user.usr_birthDate;
        this.usr_avatar = user.usr_avatar;
        this.usr_image = user.usr_image;
        this.usr_imgURL = user.usr_imgURL;
        this.usr_isTempPassword = user.usr_isTempPassword;
        this.id_gen = user.id_gen;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM user_usr');
    }

    static async findByEmail(email) {
        const sql = `SELECT * FROM user_usr WHERE usr_email = ?`;
        const result = await db.query(sql, [email])
        return result[0][0]
    }

    static async create(newUser) {
        const user = await User.findByEmail(newUser.usr_email);
        if (!user) {
            newUser.usr_password = getRandomString(10);
            const hash = await argon2.hash(newUser.usr_password);
            newUser.usr_isTempPassword = 1;

            await db.query("begin");

            try {
                await db.query('INSERT INTO user_usr(usr_firstname, usr_lastname, usr_email, usr_password, usr_birthDate, usr_createdAt, usr_avatar, usr_image, usr_imgURL, usr_isTempPassword, id_gen) VALUES (?, ?, ?, ?, ?, NOW(), ?, ?, ?, ?, ?)', [
                    newUser.usr_firstname,
                    newUser.usr_lastname,
                    newUser.usr_email,
                    hash,
                    newUser.usr_birthDate,
                    newUser.usr_avatar,
                    newUser.usr_image, 
                    newUser.usr_imgURL,
                    newUser.usr_isTempPassword,
                    newUser.id_gen]);

                const transporter = nodemailer.createTransport(
                    {
                        host: "smtp.gmail.com",
                        port: 587,
                        secure: false,
                        auth: {
                            user: 'contact.dev.orion@gmail.com',
                            pass: PASSWORD_SAV
                        },
                        logger: false,
                        debug: false // include SMTP traffic in the logs
                    }
                )

                const message = {
                    from: 'contact.dev.orion@gmail.com',
                    to: newUser.usr_email,
                    subject: 'Création de compte',
                    text: 'Bienvenu sur Orion!',
                    html:
                        `<h5>Bonjour ${newUser.usr_firstname}<h5><br>
                    <p>Ton compte sur l'application Orion est maintenant crée, tu peux te connecter via les identifiants suivants:</p><br>
                    <p>Email: ${newUser.usr_email}</p><br>
                    <p>Mot de passe: ${newUser.usr_password}</p><br>
                    <p>Pour des raisons de sécurité, pense à changer ton mot de passe dès ta première connection ;)</p><br>
                    <p>A bientôt sur Orion! </p>
                    `,
                };

                await transporter.verify();
                const info = await transporter.sendMail(message, err => { console.log(err) });
                console.log('Message sent successfully as %s', info, message);

                await db.query("commit");
            }
            catch (err) {
                console.error("error while querying:", err);
                return db.query("rollback");
            }
        } else {
            throw new Error('user already exist');
        }
    }

    static async update(id, user) {
        user.id_usr = id;

        if(user.usr_password){
            console.log('toto');
            updatePassword(id, user.usr_password)
        }

        if(user.usr_imgURL){
            return db.query('UPDATE user_usr SET usr_firstname = ?, usr_lastname = ?, usr_birthDate = ?, usr_updatedAt = NOW(),usr_imgURL=?, id_gen = ? WHERE id_usr = ?', [
                user.usr_firstname,
                user.usr_lastname,
                user.usr_birthDate,
                user.usr_imgURL,
                user.id_gen,
                user.id_usr
            ])
        } else {
            return db.query('UPDATE user_usr SET usr_firstname = ?, usr_lastname = ?, usr_birthDate = ?, usr_updatedAt = NOW(), id_gen = ? WHERE id_usr = ?', [
                user.usr_firstname,
                user.usr_lastname,
                user.usr_birthDate,
                user.id_gen,
                user.id_usr
            ])
        }

        
    }

    static async reset(email) {
        const user = await User.findByEmail(email);
        if (!user) {
            throw new Error('please create an account for this user first');
        } else {
            const password = getRandomString(10);
            const hash = await argon2.hash(password);

            await db.query("begin");

            try {
                await db.query('UPDATE user_usr SET usr_password = ? WHERE usr_email = ?', [
                    hash,
                    email
                ]);

                const transporter = nodemailer.createTransport(
                    {
                        host: "smtp.gmail.com",
                        port: 587,
                        secure: false,
                        auth: {
                            user: 'contact.dev.orion@gmail.com',
                            pass: PASSWORD_SAV
                        },
                        logger: false,
                        debug: false // include SMTP traffic in the logs
                    }
                )

                const message = {
                    from: 'contact.dev.orion@gmail.com',
                    to: email,
                    subject: 'Création de compte',
                    text: 'Bienvenu sur Orion!',
                    html:
                        `<h5>Bonjour,<h5><br>
                        <p>Suite à ta demande nous t'avons crée un nouveau mot de passe et tu peux donc te connecter de nouveau à ton application favorite via les identifiants suivants:</p><br>
                        <p>Email: ${email}</p><br>
                        <p>Mot de passe: ${password}</p><br>
                        <p>Pour des raisons de sécurité, pense à changer ton mot de passe dès ta première reconnection ;)</p><br>
                        <p>A bientôt sur Orion! </p>
                        `,
                };

                await transporter.verify();
                const info = await transporter.sendMail(message, err => { console.log(err) });
                console.log('Message sent successfully as %s', info, message);

                await db.query("commit");

            } catch (err) {
                console.error("error while querying:", err);
                return db.query("rollback");
            }

        }
    }

    static delete(id) {
        return db.query('DELETE FROM user_usr WHERE id_usr = ?', [id])
    }

    static findById(id) {
        return db.query('SELECT * FROM user_usr WHERE id_usr = ?', [id])
    }

    static async updatePassword(id, password) {
        const hash = await argon2.hash(password);
        return db.query('UPDATE user_usr SET usr_password = ?, usr_isTempPassword = 0 WHERE id_usr = ?', [
            hash,
            id
        ]);
    }

    static async login(email, password) {
        const user = await User.findByEmail(email);
        if (!user) {
            throw new Error('user not found');
        } else {

            const passwordIsValid = await argon2.verify(user.usr_password, password);
            if (!passwordIsValid) {
                throw new Error('incorrect password');
            } else {
                const data = { email: user.email, id: user.id };
                const token = jwt.sign(data, JWT_PRIVATE_KEY, { expiresIn: '24h' });
                const result = { id: user.id_usr, token: token, isTempPassword: user.usr_isTempPassword };
                return result;
            }
        }
    }

    static async getUserProfil(id) {
        return db.query(
            'SELECT *, (SELECT COUNT(*) FROM message_mes WHERE message_mes.mes_receiver = user_usr.id_usr AND message_mes.mes_readAt IS NULL) AS messages, (SELECT COUNT(*) FROM like_lik WHERE like_lik.id_usr = user_usr.id_usr) AS stars, (SELECT COUNT(*) FROM user_badge_usb WHERE user_badge_usb.id_usr = user_usr.id_usr) AS badges FROM user_usr WHERE user_usr.id_usr = ?', [id]);
    }

}