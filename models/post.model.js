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
    
    static fetchAllParent(){
        return db.execute('SELECT id_pos, pos_content, pos_createdAt , (SELECT COUNT(*) FROM post_pos b WHERE b.id_parent = post_pos.id_pos) AS answers, (SELECT COUNT(*) FROM like_lik WHERE like_lik.id_pos = post_pos.id_pos) AS stars,(SELECT usr_firstname FROM user_usr WHERE user_usr.id_usr = post_pos.id_usr) AS usr_firstname, (SELECT usr_lastname FROM user_usr WHERE user_usr.id_usr = post_pos.id_usr) AS usr_lastname, (SELECT usr_imgURL FROM user_usr WHERE user_usr.id_usr = post_pos.id_usr) AS avatar FROM post_pos WHERE post_pos.id_parent IS NULL;');
    }

    static fetchAllChildren(){
        return db.execute('SELECT id_pos, pos_content, pos_createdAt, id_parent, (SELECT COUNT(*) FROM like_lik WHERE like_lik.id_pos = post_pos.id_pos) AS stars, (SELECT usr_firstname FROM user_usr WHERE user_usr.id_usr = post_pos.id_usr) AS usr_firstname, (SELECT usr_lastname FROM user_usr WHERE user_usr.id_usr = post_pos.id_usr) AS usr_lastname, (SELECT usr_imgURL FROM user_usr WHERE user_usr.id_usr = post_pos.id_usr) AS avatar FROM post_pos WHERE post_pos.id_parent IS NOT NULL;');
    }


    static create(newPost) {
        // return db.query('INSERT INTO post_pos(pos_content, pos_createdAt, pos_updatedAt, pos_deletedAt,pos_image,pos_imgURL, id_exa, id_usr, id_parent) VALUES (?, ?, ?, ?, ?, ?, ?, ? , ? )' , [
        //     newPost.pos_content,
        //     newPost.pos_createdAt,
        //     newPost.pos_updatedAt,
        //     newPost.pos_deletedAt,
        //     newPost.pos_image,
        //     newPost.pos_imgURL,
        //     newPost.id_exa,
        //     newPost.id_usr,
        //     newPost.id_parent
        // ]);

        return db.query('INSERT INTO post_pos(pos_content, pos_createdAt, id_usr, id_parent) VALUES (?, NOW(), ?, ?)' , [
            newPost.pos_content,
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
