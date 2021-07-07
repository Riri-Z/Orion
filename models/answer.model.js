const db = require('../utils/database.js');

module.exports = class Answer {
  constructor(answer) {
    this.id_ans = answer.id_ans;
    this.ans_istrue = answer.ans_istrue;
    this.ans_content = answer.ans_content;
    this.id_exa = answer.id_exa;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM answer_ans');
  }

  static fetchSpecific(id) {
    return db.execute('SELECT * FROM answer_ans WHERE ');
  }

  static create(newAnswer) {

    const {
      ans_istrue,
      ans_content,
      id_exa
    } = newAnswer
    return db.query('INSERT INTO answer_ans(ans_istrue,ans_content, id_exa) VALUES (?, ?, ?)', [
      ans_istrue,
      ans_content,
      id_exa
    ]);
  }

  static update(id, answer) {
    const {
      ans_istrue,
      ans_content,
      id_exa
    } = answer;
    return db.query('UPDATE answer_ans SET ans_istrue = ?, ans_content = ?, id_exa = ?  WHERE id_ans = ?', [
      ans_istrue,
      ans_content,
      id_exa,
      Number(id)
    ]);
  }

  static delete(id) {
    return db.query('DELETE FROM answer_ans WHERE id_ans = ?', [id]);
  }
}