exports.errorHandler = (controller) => {
    return async (req, res, next) => {
        try {
            await controller(req, res)
        } catch ({
            code,
            message,
            status
        }) {
            res.status(status || 500)
                .json({
                    code,
                    message
                })
        }
    }
}

exports.errorAuthorisation = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
}

exports.errorRouteHandler = (req, res) => {
    console.log('test');
    res.status(404).json({
        error: 'Not found'
    });
}