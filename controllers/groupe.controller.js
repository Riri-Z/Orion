const Groupe = require('../models/groupe.model');

exports.getAllGroupes = async (req, res, next) => {
    const [allGroupe] = await Groupe.fetchAll();
    res.status(200).json(allGroupe);
};

exports.createGroupe = async (req, res, next) => {
    const  clientPayload = req.body 
    const groupe = new Groupe(clientPayload)
    const data = await Groupe.create(groupe)
    res.status(201).send({data})
};


exports.putGroupe = async (req, res, next) => {
    const id = req.params.id
    const groupe = req.body
    const putGroupeResponse = await Groupe.update(id, new Groupe(groupe));
    res.status(201).json(putGroupeResponse);
};

exports.deleteGroupe = async (req, res, next) => {
    const deleteGroupeResponse = await Groupe.delete(req.params.id);
    res.status(204).json(deleteGroupeResponse);
};

