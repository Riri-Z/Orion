const db = require('../utils/database.js');

module.exports = class Answer {
  constructor(answer) {
    this.id_ans = answer.id_ans;
    this.ans_istrue = answer.ans_istrue;
    this.ans_content = answer.ans_content;
    this.id_que = answer.id_que;
    this.id_exa = answer.id_exa
  }

  static fetchAll() {
    return db.execute('SELECT * FROM answer_ans');
  }


  static create(newAnswer) {
    const {
      ans_istrue,
      ans_content,
      id_que,
      id_exa
    } = newAnswer
    return db.query('INSERT INTO answer_ans(ans_istrue,ans_content,id_que,id_exa) VALUES (?, ?, ?, ?)', [
      ans_istrue,
      ans_content,
      id_que,
      id_exa
    ]);
  }

  static update(id, answer) {
    const {
      ans_istrue,
      ans_content,
      id_que,
      id_exa
    } = answer;
    return db.query('UPDATE answer_ans SET ans_istrue = ?, ans_content = ?,id_que = ?, id_exa =  ? WHERE id_ans = ?', [
      ans_istrue,
      ans_content,
      id_que,
      id_exa,
      Number(id)
    ]);
  }

  static delete(id) {
    return db.query('DELETE FROM answer_ans WHERE id_ans = ?', [id]);
  }

  static getSpecific(id_que){
        return db.query('select * from answer_ans     inner join question_que on answer_ans.id_que = question_que.id_que inner join exam_exa on exam_exa.id_exa = question_que.id_exa     where answer_ans.id_que = ?', [
      id_que
    ])
  }
}