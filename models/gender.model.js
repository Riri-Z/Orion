const db = require('../utils/database.js');

module.exports = class Gender {
    constructor(gender) {
        this.id_gen = gender.id_gen;
        this.gen_name = gender.gen_name;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM gender_gen');
    }
    
    static create(newGender) {
        return db.query('INSERT INTO gender_gen(gen_name) VALUES (?)' , [newGender.gen_name]);
    }

    static update(id, gender) {
        gender.id_gen = id;
        return db.query('UPDATE gender_gen SET gen_name = ? WHERE id_gen = ?' , [gender.gen_name,gender.id_gen]);
    }

    static delete(id) {
        return db.query('DELETE FROM gender_gen WHERE id_gen = ?' , [id]);
    }
}