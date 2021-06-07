const db = require('../utils/database.js');

module.exports = class UserBadge {
    constructor(userRole) {
        this.id_usb = userRole.id_usb;
        this.id_usr = userRole.id_usr;
        this.id_bab = userRole.id_bab;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM user_badge_usb');
    }
    
    static create(newUserBadge) {
        const {id_bab, id_usr}  = newUserBadge;
        return db.query('INSERT INTO user_badge_usb(id_bab, id_usr) VALUES (?, ?)' , [id_bab, id_usr]);
    }

    static update(id, userRole) {
        userRole.id_usb = id;
        return db.query('UPDATE user_badge_usb SET id_bab = ?, id_usr = ? WHERE id_usb = ?' , [userRole.id_bab, userRole.id_usr, userRole.id_usb]);
    }

    static delete(id) {
        return db.query('DELETE FROM user_badge_usb WHERE id_usb = ?' , [id]);
    }
}