const db = require('../utils/database.js');

module.exports = class Groupe {
    constructor(groupe) {
        this.id_grp = groupe.id_grp;
        this.grp_name = groupe.grp_name;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM group_grp');
    }
    
    static create(newGroupe) {
        return db.query('INSERT INTO group_grp(grp_name) VALUES (?)' , [newGroupe.grp_name]);
    }

    static update(id, groupe) {
        groupe.id_grp = id;
        return db.query('UPDATE group_grp SET grp_name = ? WHERE id_grp = ?' , [groupe.grp_name,groupe.id_grp]);
    }

    static delete(id) {
        return db.query('DELETE FROM group_grp WHERE id_grp = ?' , [id]);
    }
}