const logRequest = (req, res, next) => {
    console.log('terjadi requesr ke PATH: ', req.path);
    next();
}
module.exports = logRequest;