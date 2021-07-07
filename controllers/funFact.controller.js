const FunFact =  require('../models/funFact.model')

exports.getAllFunFacts  = async (req,res, next ) => {
  const [allFunFact] = await FunFact.fetchAll()
  res.status(200).json(allFunFact)
}

exports.getOne = async (req, res, next ) => {
  const [funFact] = await FunFact.fetchOne()
  res.status(200).json(funFact)
}

exports.createFunFact = async (req, res, next) => {
  const clientPayload = req.body
  const funFact = new FunFact(clientPayload)
  const data = await FunFact.create(funFact)
  res.status(201).send({ data })
};


exports.putFunFact =  async(req, res, next ) =>  {
  const clientPayload = req.body
    const id = req.params.id
    const funFact = clientPayload
    const putFunFactResponse = await FunFact.update(id, new FunFact(funFact));
    res.status(201).json(putFunFactResponse);
}

exports.deleteFunFact = async (req, res, next) => {
  const putFunFactResponse = await FunFact.delete(req.params.id);
  res.status(201).json(putFunFactResponse);
};

