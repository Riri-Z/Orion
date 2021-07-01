const db = require('../utils/database.js');

module.exports = class Answer {
  constructor(answer) {
    this.id_ans = answer.id_ans;
    this.ans_istrue = answer.ans_istrue;
    this.ans_content = answer.ans_content;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM answer_ans');
  }

  static create(newAnswer) {
    const {
      ans_istrue,
      ans_content
    } = newAnswer

    return db.query('INSERT INTO answer_ans(ans_istrue,ans_content) VALUES (?, ?)', [
      ans_istrue,
      ans_content
    ]);
  }

  static update(id, answer) {
    const {
      ans_istrue,
      ans_content
    } = answer;
    return db.query('UPDATE answer_ans SET ans_istrue = ?, ans_content = ?, WHERE id_ans = ?', [
      ans_istrue,
      ans_content,
      Number(id)
    ]);
  }

  static delete(id) {
    return db.query('DELETE FROM answer_ans WHERE id_ans = ?', [id]);
  }
}