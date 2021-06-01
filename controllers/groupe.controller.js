const Groupe = require('../models/groupe.model');

exports.getAllGroupes = async (req, res, next) => {
    try{
        const [allGroupe] = await Groupe.fetchAll();
        res.status(200).json(allGroupe);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

exports.createGroupe = async (req, res, next) => {
    const  clientPayload = req.body 
    console.log('clientPayload' , clientPayload )
    try{
     const groupe = new Groupe(clientPayload)
     console.log("groupe", groupe)
     const data = await Groupe.create(groupe)
     console.log("data", data)
     res.status(201).send({data})
    }catch(err){  
         if(!err.statusCode){
            err.statusCode = 500
        }
        next(err); 
    }
};


exports.putGroupe = async (req, res, next) => {
    try{
        const id = req.params.id
        const groupe = req.body

        const putGroupeResponse = await Groupe.update(id, new Groupe(groupe));
        res.status(201).json(putGroupeResponse);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

exports.deleteGroupe = async (req, res, next) => {
    try{
        const deleteGroupeResponse = await Groupe.delete(req.params.id);
        res.status(204).json(deleteGroupeResponse);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

