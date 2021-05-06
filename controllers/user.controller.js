const User = require('../models/user.model');

exports.getAllUsers = async (req, res, next) => {
    try{
        const [allUsers] = await User.fetchAll();
        res.status(200).json(allUsers);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

exports.createUser = async (req, res, next) => {
    const  clientPayload = req.body 
    try{
     const user = new User(clientPayload)
     const data = await User.create(user)
     res.status(204).send({data})
    }catch(err){  
         if(!err.statusCode){
            err.statusCode = 500
        }
        next(err); 
    }
};


exports.putUser = async (req, res, next) => {
    try{
        const id = req.params.id
        const user = req.body

        const putUserResponse = await User.update(id, new User(user));
        res.status(201).json(putUserResponse);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

exports.deleteUser = async (req, res, next) => {
    try{
        const deleteUserResponse = await User.delete(req.params.id);
        res.status(201).json(deleteUserResponse);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

