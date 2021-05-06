const db = require('../utils/database.js');

module.exports = class UserLike {
    constructor(UserLike) {
        this.id_usl = UserLike.id_usl;
        this.id_lik = UserLike.id_lik;
        this.id_usr = UserLike.id_usr;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM user_lik_usl');
    }
    
    static create(newUserLike) {
        const {id_lik, id_usr}  = newUserLike;
        return db.query('INSERT INTO user_lik_usl(id_lik, id_usr) VALUES (?, ?)' , [id_lik, id_usr]);
    }

    static update(id, UserLike) {
        // const {id_rus = id, id_rol, id_usr}  = UserLike;
        // return db.query('UPDATE role_user_rus SET id_rol = ?, id_usr = ? WHERE id_rus = ?' , [id_rol, id_usr, id_rus]);
        UserLike.id_usl = id;
        return db.query('UPDATE user_lik_usl SET id_usl = ?, id_lik = ? WHERE id_usr = ?' , [UserLike.id_usr, UserLike.id_lik, UserLike.id_usr]);
    }

    static delete(id) {
        return db.query('DELETE FROM user_lik_usl WHERE id_usl = ?' , [id]);
    }
}