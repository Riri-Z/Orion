const UserRole = require('../models/role.user.model');

exports.getAllUserRoles = async (req, res, next) => {
    try{
        const [allUserRoles] = await UserRole.fetchAll();
        res.status(200).json(allUserRoles);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

exports.createUserRole = async (req, res, next) => {
    const  clientPayload = req.body 
    try{
     const userRole = new UserRole(clientPayload)
     const data = await UserRole.create(userRole)
     res.status(201).send({data})
    }catch(err){  
         if(!err.statusCode){
            err.statusCode = 500
        }
        next(err); 
    }
};

exports.putUserRole = async (req, res, next) => {
    try{
        const id = req.params.id
        const userRole = req.body
        const putUserRoleResponse = await UserRole.update(id, new UserRole(userRole));
        res.status(201).json(putUserRoleResponse);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

exports.deleteUserRole = async (req, res, next) => {
    try{
        const deleteUserRoleResponse = await UserRole.delete(req.params.id);
        res.status(204).json(deleteUserRoleResponse);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};