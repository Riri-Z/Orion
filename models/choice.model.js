const db = require('../utils/database.js');

module.exports = class Choice {
  constructor(choice) {
    this.id_cho = choice.id_cho;
    this.id_que = choice.id_que;
    this.id_ans = choice.id_ans;
    this.id_exa = choice.id_exa;
    this.id_usr = choice.id_usr;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM choice_cho');
  }

  static create(newChoice) {
    const {
      id_que,
      id_ans,
      id_exa,
      id_usr
    } = newChoice

    return db.query('INSERT INTO choice_cho(id_que,id_ans,id_exa, id_usr ) VALUES (?, ?, ?, ?)', [
      id_que,
      id_ans,
      id_exa,
      id_usr
    ]);
  }

  static update(id, choice) {
    const {
      id_que,
      id_ans,
      id_exa,
      id_usr
    } = choice;
    return db.query('UPDATE choice_cho SET id_que = ?, id_ans = ?,id_exa = ?, id_usr = ?, WHERE id_cho = ?', [
      id_que,
      id_ans,
      id_exa,
      id_usr,
      Number(id)
    ]);
  }

  static delete(id) {
    return db.query('DELETE FROM choice_cho WHERE id_cho = ?', [id]);
  }
}