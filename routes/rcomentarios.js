module.exports = function (app, swig, gestorBD) {
    app.post("/comentario/:cancion_id", function (req, res) {
        let comentario = {
            texto: req.body.texto,
            autor: req.session.usuario,
            cancion_id: gestorBD.mongo.ObjectID(req.params.cancion_id)
        }
        if (comentario.autor == null) {
            res.send("Error al insertar comentario: necesario iniciar sesión");
        } else {
            // Conectarse
            gestorBD.insertarComentario(comentario, function (id) {
                    res.redirect('/cancion/' + comentario.cancion_id);
            });
        }
    });
};
