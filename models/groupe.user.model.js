const db = require('../utils/database.js');

module.exports = class GroupUser {
    constructor(groupUser) {
        this.id_gru = groupUser.id_gru;
        this.id_usr = groupUser.id_usr;
        this.id_grp = groupUser.id_grp;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM group_user_gru');
    }
    
    static create(newGroupUser) {
        return db.query('INSERT INTO group_user_gru(id_usr, id_grp) VALUES (?, ?)' , [
            newGroupUser.id_usr, 
            newGroupUser.id_grp
        ]);
    }

    static update(id, groupUser) {
        groupUser.id_gru = id;
        return db.query('UPDATE group_user_gru SET id_usr = ?, id_grp = ? WHERE id_gru = ?' , [
            groupUser.id_usr, 
            groupUser.id_grp, 
            groupUser.id_gru
        ]);
    }

    static delete(id) {
        return db.query('DELETE FROM group_user_gru WHERE id_gru = ?' , [id]);
    }
}