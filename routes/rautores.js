module.exports = function(app, swig) {
    app.get("/autores", function (req, res) {
        var autores = [{
            "nombre": "Axl Rose",
            "grupo": "Guns N' Roses",
            "rol": "Cantante"
        }, {
            "nombre": "Joey Kramer",
            "grupo": "Aerosmith",
            "rol": "Batería"
        }, {
            "nombre": "Dave Mustaine",
            "grupo": "Metallica",
            "rol": "Guitarra"
        }];
        var respuesta = swig.renderFile('views/autores.html', {
            vendedor: 'Tienda de canciones',
            autores: autores
        });
        res.send(respuesta);
    });

    app.get("/autores/agregar", function(req, res) {
        var respuesta = swig.renderFile('views/autores-agregar.html', {});
        res.send(respuesta);
    });

    app.post("/autor", function (req, res) {
        res.send("Autor agregado: " + req.body.nombre + "<br>"
            + "grupo: " + req.body.grupo + "<br>"
            + "rol: " + req.body.rol);
    });

    app.get('/autores*', function (req, res) {
        res.redirect('/autores');
    });
};