const db = require('../utils/database.js');

module.exports = class Like {
    constructor(like) {
        this.id_lik = like.id_lik;
        this.lik_createdAt = like.lik_createdAt;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM like_lik');
    }
    
    static create(newLike) {
        const {lik_createdAt}  = newLike;
        return db.query('INSERT INTO like_lik(lik_createdAt) VALUES (?)' , [lik_createdAt]);
    }

    static update(id, like) {
        const { id_lik = id, lik_createdAt}  = like;
        return db.query('UPDATE like_lik SET lik_createdAt = ? WHERE id_lik = ?' , [lik_createdAt,id_lik]);
    }

    static delete(id) {
        return db.query('DELETE FROM like_lik WHERE id_gen = ?' , [id]);
    }
}