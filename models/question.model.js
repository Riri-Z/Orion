const db = require('../utils/database.js')

module.exports  = class Question {
  constructor(question) {
    this.id_que = question.id_que
    this.que_content= question.que_content
    this.id_exa= question.id_exa
  }


  static fetchAll() {
    return db.execute('SELECT * FROM question_que');
  }

  static fetchOne(id) {
    return db.execute('SELECT * FROM exam_exa WHERE id_que = ?', [id])
  }

  static create(newQuestion) {
    return db.query(' INSERT INTO question_que(que_content, id_exa ) VALUES (  ? , ? )',[
      newQuestion.que_content,
      newQuestion.id_exa
    ])
  }

  static update (id, question) {
    question.id_que = id 
    return db.query ("UPDATE question_que SET que_content = ? , id_exa = ? WHERE id_que = ? ", [
      question.que_content,
      question.id_exa,
      question.id_que
    ])
  }

  static delete(id) {
    return db.query("DELETE FROM question_que WHERE id_que = ?", [id])
  }
}