const db = require('../utils/database.js');

module.exports = class Role {
    constructor(role) {
        this.id_rol = role.id_rol;
        this.rol_name = role.rol_name;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM role_rol');
    }
    
    static create(newRole) {
        return db.query('INSERT INTO role_rol(rol_name) VALUES (?)' , [newRole.rol_name]);
    }

    static update(id, role) {
        role.id_rol = id;
        return db.query('UPDATE role_rol SET rol_name = ? WHERE id_rol = ?' , [role.rol_name,role.id_rol]);
    }

    static delete(id) {
        return db.query('DELETE FROM role_rol WHERE id_rol = ?' , [id]);
    }
}