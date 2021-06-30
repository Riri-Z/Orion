const db = require('../utils/database.js')


module.exports = class Examen {
  constructor(examen){
    this.id_exa = examen.id_exa;
    this.exa_title = examen.exa_title;
    this.exa_cover = examen.exa_cover;
    this.exa_createdAt = examen.exa_createdAt;
    this.exa_publishedAt  = examen.exa_publishedAt;
    this.exa_updatedAt = examen.exa_updatedAt;
    this.exa_deletedAt = examen.exa_deletedAt;
    this.id_usr = examen.id_usr;
  }


  static fetchAll() {

    return db.execute('SELECT * FROM exam_exa');
  }

  static fetchOne(id) {
    return db.execute('SELECT * FROM exam_exa WHERE id_exa = ?', [id])
  }

  static create(newExamen) {
    console.log(`newExamen`, newExamen)
    return db.query(' INSERT INTO exam_exa(id_exa, exa_title, exa_cover, exa_createdAt, exa_publishedAt, exa_updatedAt, exa_deletedAt, id_usr) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?)', [
      newExamen.id_exa,
      newExamen.exa_title,
      newExamen.exa_cover,
      newExamen.exa_createdAt,
      newExamen.exa_publishedAt,
      newExamen.exa_updatedAt,
      newExamen.exa_deletedAt,
      newExamen.id_usr,
    ])
  }

  static update(id, examen) {
    examen.id_exa = id;
    return db.query('UPDATE exam_exa SET id_exa = ?, exa_title = ?, exa_cover = ?, exa_createdAt = ?, exa_publishedAt = ?, exa_updatedAt = ?,  exa_deletedAt = ?, id_usr = ? WHERE id_exa = ?', [
      examen.id_exa,
      examen.exa_title,
      examen.exa_cover,
      examen.exa_createdAt,
      examen.exa_publishedAt,
      examen.exa_updatedAt,
      examen.exa_deletedAt,
      examen.id_usr,
    ]);
  }

  static delete(id) {
    return db.query('DELETE FROM exam_exa WHERE id_exa', [id])
  }
}