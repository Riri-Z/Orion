const UserRole = require('../models/role.user.model');

exports.getAllUserRoles = async (req, res, next) => {
    const [allUserRoles] = await UserRole.fetchAll();
    res.status(200).json(allUserRoles);
};

exports.createUserRole = async (req, res, next) => {
    const  clientPayload = req.body 
    const userRole = new UserRole(clientPayload)
    const data = await UserRole.create(userRole)
    res.status(201).send({data});
};

exports.putUserRole = async (req, res, next) => {
    const id = req.params.id
    const userRole = req.body
    const putUserRoleResponse = await UserRole.update(id, new UserRole(userRole));
    res.status(201).json(putUserRoleResponse);
};

exports.deleteUserRole = async (req, res, next) => {
    const deleteUserRoleResponse = await UserRole.delete(req.params.id);
    res.status(204).json(deleteUserRoleResponse);
};