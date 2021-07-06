const db = require('../utils/database.js');

module.exports = class Post {
    constructor(post) {
        this.id_pos = post.id_pos;
        this.pos_content = post.pos_content;
        this.pos_createdAt = post.pos_createdAt;
        this.pos_updatedAt = post.pos_updatedAt;
        this.pos_deletedAt = post.pos_deletedAt;
        this.pos_image = post.pos_image;
        this.pos_imgURL = post.pos_imgURL;
        this.id_exa = post.id_exa;
        this.id_parent = post.id_parent;
        this.id_usr = post.id_usr;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM post_pos');
    }
    
    static create(newPost) {
        return db.query('INSERT INTO post_pos(pos_content, pos_createdAt, pos_updatedAt, pos_deletedAt,pos_image,pos_imgURL, id_exa, id_usr, id_parent) VALUES (?, ?, ?, ?, ?, ?, ?, ? , ? )' , [
            newPost.pos_content,
            newPost.pos_createdAt,
            newPost.pos_updatedAt,
            newPost.pos_deletedAt,
            newPost.pos_image,
            newPost.pos_imgURL,
            newPost.id_exa,
            newPost.id_usr,
            newPost.id_parent
        ]);
    }

    static update(id, post) {
        post.id_pos = id;
        return db.query('UPDATE post_pos SET pos_content = ?, pos_createdAt = ?, pos_updatedAt = ?, pos_deletedAt = ?, pos_image = ?, pos_imgURL = ?,  id_exa = ?, id_usr = ?, id_parent = ? WHERE id_pos = ?', [
            post.pos_content,
            post.pos_createdAt,
            post.pos_updatedAt,
            post.pos_deletedAt,
            post.pos_image,
            post.pos_imgURL,
            post.id_exa,
            post.id_usr,
            post.id_parent, 
            post.id_pos
        ]);
    }

    static delete(id) {
        return db.query('DELETE FROM post_pos WHERE id_pos = ?' , [id]);
    }
}