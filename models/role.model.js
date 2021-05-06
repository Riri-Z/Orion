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
        const {rol_name}  = newRole;
        return db.query('INSERT INTO role_rol(rol_name) VALUES (?)' , [rol_name]);
    }

    static update(id, role) {
        const { id_rol = id, rol_name}  = role;
        return db.query('UPDATE role_rol SET rol_name = ? WHERE id_rol = ?' , [rol_name,id_rol]);
    }

    static delete(id) {
        return db.query('DELETE FROM role_rol WHERE id_rol = ?' , [id]);
    }
}