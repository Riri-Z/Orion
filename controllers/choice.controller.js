const Choice = require('../models/choice.model');

exports.getAll = async (req, res, next) => {
    const [allChoices] = await Choice.fetchAll();
    res.status(200).json(allChoices);
};

exports.create = async (req, res, next) => {

    try {
        const choice = new Choice(req.body)
        const data = await Choice.create(choice)
        res.status(201).send({ data })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500
        }
    }
};


exports.put = async (req, res, next) => {
    try {
        const id = req.params.id
        const clientPayload =  req.body
        const putChoiceResponse = await Choice.update(id, new Choice(clientPayload));
        res.status(201).json(putChoiceResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err);
    }
};

exports.delete = async (req, res, next) => {
    const deleteChoiceResponse = await Choice.delete(req.params.id);
    res.status(201).json(deleteChoiceResponse);
};

