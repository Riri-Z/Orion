const Choice = require('../models/choice.model');

exports.getAll = async (req, res, next) => {

    const [allChoices] = await Choice.fetchAll();
    res.status(200).json(allChoices);
    
};

exports.create = async (req, res, next) => {

    const choice = new Choice(req.body)
    const data = await Choice.create(choice)
    res.status(201).send({ data })

};


exports.put = async (req, res, next) => {

    const id = req.params.id
    const clientPayload = req.body
    const putChoiceResponse = await Choice.update(id, new Choice(clientPayload));
    res.status(201).json(putChoiceResponse);

};

exports.delete = async (req, res, next) => {
    const deleteChoiceResponse = await Choice.delete(req.params.id);
    res.status(201).json(deleteChoiceResponse);
};

exports.getSpecific = async (req, res, next) => {
    const question = req.query
    const [choices] = await Choice.getSpecific(question.id_que, question.id_exa);
    res.status(201).json(choices);
};



