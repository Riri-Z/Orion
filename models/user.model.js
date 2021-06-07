const db = require('../utils/database.js');

module.exports = class User {
    constructor(user) {
        this.id_usr = user.id_usr;
        this.usr_firstname = user.usr_firstname;
        this.usr_lastname = user.usr_lastname;
        this.usr_email = user.usr_email;
        this.usr_password = user.usr_password;
        this.usr_birthDate = user.usr_birthDate;
        this.usr_createdAt = user.usr_createdAt;
        this.usr_updatedAt = user.usr_updatedAt;
        this.usr_avatar = user.usr_avatar;
        this.usr_image = user.usr_image;
        this.usr_imgURL = user.usr_imgURL;
        this.id_gen = user.id_gen;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM user_usr');
    }
    
    static create(newUser) {
        return db.query('INSERT INTO user_usr(usr_firstname, usr_lastname,usr_email, usr_password, usr_birthDate, usr_createdAt, usr_updatedAt, usr_avatar,usr_image,usr_imgURL, id_gen) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)' , [
            newUser.usr_firstname, 
            newUser.usr_lastname, 
            newUser.usr_email, 
            newUser.usr_password, 
            newUser.usr_birthDate, 
            newUser.usr_createdAt, 
            newUser.usr_updatedAt, 
            newUser.usr_avatar, 
            newUser.usr_image, 
            newUser.usr_imgURL,
            newUser.id_gen])
    }

    static update(id, user) {
        user.id_usr = id;
     
        return db.query('UPDATE user_usr SET usr_firstname = ?, usr_lastname = ?, usr_email = ?, usr_password = ?, usr_birthDate = ?, usr_createdAt = ?, usr_updatedAt = ?, usr_avatar = ?, usr_image = ?,usr_imgURL=?,  id_gen = ? WHERE id_usr = ?', [
            user.usr_firstname, 
            user.usr_lastname, 
            user.usr_email, 
            user.usr_password, 
            user.usr_birthDate, 
            user.usr_createdAt, 
            user.usr_updatedAt, 
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
}