const Role = require('../models/role.model');

exports.getAllRoles = async (req, res, next) => {
    const [allRoles] = await Role.fetchAll();
    res.status(200).json(allRoles);
};

exports.createRole = async (req, res, next) => {
    const  clientPayload = req.body 
    const role = new Role(clientPayload)
    const data = await Role.create(role)
    res.status(201).send({data});
};

exports.putRole = async (req, res, next) => {
    const id = req.params.id
    const role = req.body
    const putRoleResponse = await Role.update(id, new Role(role));
    res.status(201).json(putRoleResponse);
};

exports.deleteRole = async (req, res, next) => {
    const deleteRoleResponse = await Role.delete(req.params.id);
    res.status(204).json(deleteRoleResponse);
};