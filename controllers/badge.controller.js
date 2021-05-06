const Badge = require('../models/badge.model');

exports.getAll = async (req, res, next) => {
    try{
        const [allBadges] = await Badge.fetchAll();
        res.status(200).json(allBadges);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

exports.create = async (req, res, next) => {
  const clientPayload = req.body
  try {
    const Badge = new Badge(clientPayload)
    const data = await Badge.create(Badge)
    res.status(201).send({ data })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err);
  }
};


exports.put = async (req, res, next) => {
    try{
        const id = req.params.id
        const Badge = req.body

        const putBadgeResponse = await Badge.update(id, new Badge(Badge));
        res.status(201).json(putBadgeResponse);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

exports.delete = async (req, res, next) => {
    try{
        const deleteBadgeResponse = await Badge.delete(req.params.id);
        res.status(201).json(deleteBadgeResponse);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

