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
        const {gen_name}  = newGender;
        return db.query('INSERT INTO gender_gen(gen_name) VALUES (?)' , [gen_name]);
    }

    static update(id, gender) {
        const { id_gen = id, gen_name}  = gender;
        return db.query('UPDATE gender_gen SET gen_name = ? WHERE id_gen = ?' , [gen_name,id_gen]);
    }

    static delete(id) {
        return db.query('DELETE FROM gender_gen WHERE id_gen = ?' , [id]);
    }
}