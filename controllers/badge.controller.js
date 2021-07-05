const Badge = require('../models/badge.model');

exports.getAll = async (req, res, next) => {
    const [allBadges] = await Badge.fetchAll();
    res.status(200).json(allBadges);
};

exports.create = async (req, res) => {


        const clientPayload = req.files?.sampleFile ? { ...req.body, bab_image: req.files.sampleFile.name.toLowerCase() } : req.body
        clientPayload.bab_imgURL = clientPayload.imgURL
        delete clientPayload.imgURL
        const badge = new Badge(clientPayload)
        const data = await Badge.create(badge)
        res.status(201).send({ data })

};


exports.put = async (req, res, next) => {

        const id = req.params.id
        const clientPayload = req.files.sampleFile ?  {...req.body, bab_image : req.files.sampleFile.name } : req.body
        clientPayload.bab_imgURL = clientPayload.imgURL
        delete clientPayload.imgURL
        const putBadgeResponse = await Badge.update(id, new Badge(clientPayload));
        res.status(201).json(putBadgeResponse);

};

exports.delete = async (req, res, next) => {
    const deleteBadgeResponse = await Badge.delete(req.params.id);
    res.status(201).json(deleteBadgeResponse);
};

