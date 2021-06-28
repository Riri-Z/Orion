const db = require('../utils/database.js');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const { response } = require('express');
const { result } = require('lodash');

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

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
        this.id_gen = user.id_gen;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM user_usr');
    }
    
    static async create (newUser) {
        const hash = await argon2.hash(newUser.usr_password);
        db.query('INSERT INTO user_usr(usr_firstname, usr_lastname, usr_email, usr_password, usr_birthDate, usr_createdAt, usr_avatar, usr_image,usr_imgURL, id_gen) VALUES (?, ?, ?, ?, ?, NOW(),?,?, ?, ?)' , [
            newUser.usr_firstname, 
            newUser.usr_lastname, 
            newUser.usr_email, 
            hash, 
            newUser.usr_birthDate,
            newUser.usr_avatar, 
            newUser.usr_image, 
            newUser.usr_imgURL,
            newUser.id_gen])
    }

    static async update(id, user) {
        user.id_usr = id;
        const hash = await argon2.hash(user.usr_password);
        return db.query('UPDATE user_usr SET usr_firstname = ?, usr_lastname = ?, usr_email = ?, usr_password = ?, usr_birthDate = ?, usr_updatedAt = NOW(), usr_avatar = ?, usr_image = ?,usr_imgURL=?, id_gen = ? WHERE id_usr = ?' , [
            user.usr_firstname, 
            user.usr_lastname, 
            user.usr_email, 
            hash,
            user.usr_birthDate,
            user.usr_avatar, 
            user.usr_image,
            user.usr_imgURL,
            user.id_gen,
            user.id_usr
        ])
    }

    static delete(id) {
        return db.query('DELETE FROM user_usr WHERE id_usr = ?' , [id])
    }

    static async findByEmail (email) {
        const sql = `SELECT * FROM user_usr WHERE usr_email = ?`;
        const result = await db.query(sql, [email])
        return result[0][0]
    }

    static findById (id) {
        return db.query('SELECT * FROM user_usr WHERE id_usr = ?', [id])
    }

    static async login (email, password) {
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
            return token;
            }
        }
    }

    // methode à implémenter plus tard : vérification des emails
    
    //   static async emailAlreadyExists (email) {
    //     return db
    //       .query('SELECT * FROM users WHERE email = ?', [email])
    //       .then((rows) => {
    //         if (rows.length) {
    //           return Promise.resolve(true);
    //         } else {
    //           return Promise.resolve(false);
    //         }
    //       });
    //   }
}