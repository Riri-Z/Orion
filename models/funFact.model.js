const db = require('../utils/database.js');

/* 
    {
        "id_fun": 1,
        "fun_content": 1,
        "ans_content": "hello",
        "id_ans": 11
    } */
module.exports = class FunFact {
  constructor(funfact) {
    this.id_fun = funfact.id_fun;
    this.fun_content = funfact.fun_content;
    this.id_ans = funfact.id_ans;
  }

  static fetchAll(test) {
    return db.execute('SELECT * FROM funfact_fun');
  }

  static create(newFunFact) {

    const {
      fun_content,
      id_ans
    } = newFunFact
    return db.query('INSERT INTO funfact_fun(fun_content, id_ans) VALUES (?, ?)', [
      fun_content,
      id_ans
    ]);
  }

  static update(id, funfact) {
    const {
      fun_content,
      id_ans
    } = funfact;
    return db.query('UPDATE funfact_fun SET fun_content = ?, id_ans = ?  WHERE id_fun = ?', [
      fun_content,
      id_ans,
      Number(id)
    ]);
  }

  static delete(id) {
    return db.query('DELETE FROM funfact_fun WHERE id_fun = ?', [id]);
  }
}