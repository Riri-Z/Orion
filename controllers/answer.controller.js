const Answer = require('../models/answer.model');

exports.getAll = async (req, res, next) => {
    const [allAnswers] = await Answer.fetchAll();
    res.status(200).json(allAnswers);
};

exports.create = async (req, res, next) => {

        const clientPayload =  req.body
        const answer = new Answer(clientPayload)
        const data = await Answer.create(answer)
        res.status(201).send({ data })

};


exports.put = async (req, res, next) => {
    try {
        const id = req.params.id
        const clientPayload =  req.body
        const putBadgeResponse = await Answer.update(id, new Answer(clientPayload));
        res.status(201).json(putBadgeResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err);
    }
};

exports.delete = async (req, res, next) => {
    const deleteAnswerReposne = await Answer.delete(req.params.id);
    res.status(201).json(deleteAnswerReposne);
};

