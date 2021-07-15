const Gender = require('../models/gender.model');

exports.getAllGenders = async (req, res, next) => {
    const [allGender] = await Gender.fetchAll();
    res.status(200).json(allGender);
};

exports.createGender = async (req, res, next) => {
    const  clientPayload = req.body 
    const gender = new Gender(clientPayload)
    const data = await Gender.create(gender)
    res.status(201).send({data});
};


exports.putGender = async (req, res, next) => {
    const id = req.params.id
    const gender = req.body
    const putGenderResponse = await Gender.update(id, new Gender(gender));
    res.status(201).json(putGenderResponse);
};

exports.deleteGender = async (req, res, next) => {
    const deleteGenderResponse = await Gender.delete(req.params.id);
    res.status(204).json(deleteGenderResponse);
};

