const db = require('../utils/database.js');

module.exports = class Like {
    constructor(like) {
        this.id_lik = like.id_lik;
        this.lik_createdAt = like.lik_createdAt;
        this.id_usr = like.id_usr;
        this.id_pos = like.id_pos;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM like_lik');
    }
    
    static create(newLike) {
        return db.query('INSERT INTO like_lik(lik_createdAt, id_usr, id_pos) VALUES (?, ?, ?)' , [
            newLike.lik_createdAt,
            newLike.id_usr,
            newLike.id_pos]);
    }

    static update(id, like) {
        like.id_lik = id;
        return db.query('UPDATE like_lik SET lik_createdAt = ?, id_usr = ?, id_pos = ? WHERE id_lik = ?' , [
            like.lik_createdAt,
            like.id_usr,
            like.id_pos,
            like.id_lik]);
    }

    static delete(id) {
        return db.query('DELETE FROM like_lik WHERE id_lik = ?' , [id]);
    }
}