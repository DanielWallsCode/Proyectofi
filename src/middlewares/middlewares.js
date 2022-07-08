const checkAuth = (req, res, next) => {
    if (req.body.administrador) {
        next();
    } else {
        res.status(403).send({ error: -1, descripcion: `Ruta ${req.url} o metodo ${req.method} no aceeptados`});
    }
}
module.exports = { checkAuth };