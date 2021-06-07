const Role = require('../models/role.model');

exports.getAllRoles = async (req, res, next) => {
    try{
        const [allRoles] = await Role.fetchAll();
        res.status(200).json(allRoles);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

exports.createRole = async (req, res, next) => {
    const  clientPayload = req.body 
    try{
     const role = new Role(clientPayload)
     const data = await Role.create(role)
     res.status(201).send({data})
    }catch(err){  
         if(!err.statusCode){
            err.statusCode = 500
        }
        next(err); 
    }
};

exports.putRole = async (req, res, next) => {
    try{
        const id = req.params.id
        const role = req.body

        const putRoleResponse = await Role.update(id, new Role(role));
        res.status(201).json(putRoleResponse);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

exports.deleteRole = async (req, res, next) => {
    try{
        const deleteRoleResponse = await Role.delete(req.params.id);
        res.status(204).json(deleteRoleResponse);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};