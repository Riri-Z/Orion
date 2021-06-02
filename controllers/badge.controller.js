const Badge = require('../models/badge.model');

exports.getAll = async (req, res, next) => {
    try {
        const [allBadges] = await Badge.fetchAll();
        res.status(200).json(allBadges);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err);
    }
};

exports.create = async (req, res, next) => {

    const clientPayload = req.files.sampleFile ?  {...req.body, bab_image : req.files.sampleFile.name } : req.body
    try {
        const badge = new Badge(clientPayload)
        const data = await Badge.create(badge)
        res.status(201).send({ data })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err);
    }
};


exports.put = async (req, res, next) => {
    try {
        const id = req.params.id
        const clientPayload = req.files.sampleFile ?  {...req.body, bab_image : req.files.sampleFile.name } : req.body
        const putBadgeResponse = await Badge.update(id, new Badge(clientPayload));
        res.status(201).json(putBadgeResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err);
    }
};

exports.delete = async (req, res, next) => {
    try {
        const deleteBadgeResponse = await Badge.delete(req.params.id);
        res.status(201).json(deleteBadgeResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err);
    }
};

