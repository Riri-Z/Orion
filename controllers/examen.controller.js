const Examen =  require('../models/examen.model')

exports.getAllExamens  = async (req,res, next ) => {
  const [allExamens] = await Examen.fetchAll()
  res.status(200).json(allExamens)
}

exports.getOne = async (req, res, next ) => {
  const examen = await Examen.fetchOne()
  res.status(200).json(examen)
}

exports.createExamen = async (req, res, next) => {
  const clientPayload = req.body
  clientPayload.exa_cover = clientPayload.imgURL
  delete clientPayload.imgURL    
  const examen = new Examen(clientPayload)
  const data = await Examen.create(examen)
  res.status(201).send({ data })
};


exports.putExamen =  async(req, res, next ) =>  {
  const clientPayload = req.body
    clientPayload.exa_cover = clientPayload.imgURL
    delete clientPayload.imgURL
    const id = req.params.id
    const examen = clientPayload
    const putExamenResponse = await Examen.update(id, new Examen(examen));
    res.status(201).json(putExamenResponse);
}

exports.deleteExamen = async (req, res, next) => {
  const putExamenResponse = await Examen.delete(req.params.id);
  res.status(201).json(putExamenResponse);
};

