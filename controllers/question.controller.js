const Question =  require('../models/question.model')

exports.getAllQuestions  = async (req,res, next ) => {
  const [allQuestions] = await Question.fetchAll()
  res.status(200).json(allQuestions)
}

exports.getOne = async (req, res, next ) => {
  const Question = await Question.fetchOne()
  res.status(200).json(Question)
}

exports.createQuestion = async (req, res, next) => {
  const clientPayload = req.body
  const question = new Question(clientPayload)
  const data = await Question.create(question)
  res.status(201).send({ data })
};


exports.putQuestion =  async(req, res, next ) =>  {
    const clientPayload = req.body
    const id = req.params.id
    const question = clientPayload
    const putQuestionResponse = await Question.update(id, new Question(question));
    res.status(201).json(putQuestionResponse);
}

exports.deleteQuestion = async (req, res, next) => {
  const putQuestionResponse = await Question.delete(req.params.id);
  res.status(201).json(putQuestionResponse);
};

