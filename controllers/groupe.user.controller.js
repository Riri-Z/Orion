const GroupUser = require('../models/groupe.user.model.js');

exports.getAllGroupUser = async (req, res, next) => {
    try{
        const [allGroupUser] = await GroupUser.fetchAll();
        res.status(200).json(allGroupUser);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

exports.createGroupUser= async (req, res, next) => {
    const  clientPayload = req.body 
    try{
     const groupUser = new GroupUser(clientPayload)
     const data = await GroupUser.create(groupUser)
     res.status(201).send({data})
    }catch(err){  
         if(!err.statusCode){
            err.statusCode = 500
        }
        next(err); 
    }
};

exports.putGroupUser = async (req, res, next) => {
    try{
        const id = req.params.id
        const groupUser = req.body
        const putGroupUserResponse = await GroupUser.update(id, new GroupUser(groupUser));
        res.status(201).json(putGroupUserResponse);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

exports.deleteGroupUser = async (req, res, next) => {
    try{
        const deleteGroupUserResponse = await GroupUser.delete(req.params.id);
        res.status(204).json(deleteGroupUserResponse);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};