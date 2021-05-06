const UserBadge = require('../models/badge.user.model.js');

exports.getAllUserBadge = async (req, res, next) => {
    try{
        const [allUserUserBadge] = await UserBadge.fetchAll();
        res.status(200).json(allUserUserBadge);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

exports.createUserBadge = async (req, res, next) => {
    const clientPayload = req.body
    try {
        const userBadge = new UserBadge(clientPayload)
        const data = await UserBadge.create(userBadge)
        res.status(201).send({ data })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err);
    }
};

exports.putUserBadge = async (req, res, next) => {
    try{
        const id = req.params.id
        const userBadge = req.body
        const putUserBadgeResponse = await UserBadge.update(id, new UserBadge(userBadge));
        res.status(201).json(putUserBadgeResponse);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

exports.deleteUserBadge = async (req, res, next) => {
    try{
        const deleteUserBadgeResponse = await UserBadge.delete(req.params.id);
        res.status(201).json(deleteUserBadgeResponse);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};