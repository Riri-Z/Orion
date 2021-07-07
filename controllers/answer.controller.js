const Answer = require('../models/answer.model');

exports.getAll = async (req, res) => {
    const [allAnswers] = await Answer.fetchAll();
    res.status(200).json(allAnswers);
};

exports.getAnswerForOneQuizz = async(req,res) => {
    const [answers] =await Answer.fetchSpecific(req.params.id)
    res.status(200).json(answers)
}

exports.create = async (req, res) => {

        const clientPayload =  req.body
        const answer = new Answer(clientPayload)
        const data = await Answer.create(answer)
        res.status(201).send({ data })

};


exports.put = async (req, res) => {
        const id = req.params.id
        const clientPayload =  req.body
        const putBadgeResponse = await Answer.update(id, new Answer(clientPayload));
        res.status(201).json(putBadgeResponse);
};

exports.delete = async (req, res) => {
    const deleteAnswerReposne = await Answer.delete(req.params.id);
    res.status(201).json(deleteAnswerReposne);
};

