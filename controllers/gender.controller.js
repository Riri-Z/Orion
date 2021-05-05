const Gender = require('../models/gender.model');

exports.getAllGenders = async (req, res, next) => {
    try{
        const [allGender] = await Gender.fetchAll();
        res.status(200).json(allGender);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

exports.createGender = async (req, res, next) => {
    const  clientPayload = req.body 
    try{
     const gender = new Gender(clientPayload)
     const data = await Gender.create(gender)
     res.status(201).send({data})
    }catch(err){  
         if(!err.statusCode){
            err.statusCode = 500
        }
        next(err); 
    }
};


exports.putGender = async (req, res, next) => {
    try{
        const id = req.params.id
        const gender = req.body

        const putGenderResponse = await Gender.update(id, new Gender(gender));
        res.status(201).json(putGenderResponse);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

exports.deleteGender = async (req, res, next) => {
    try{
        const deleteGenderResponse = await Gender.delete(req.params.id);
        res.status(201).json(deleteGenderResponse);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

