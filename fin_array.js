var articulos = [
    { nombre: "Bici", costo: "3000" },
    { nombre: "TV", costo: "3500" },
    { nombre: "Libro", costo: "500" },
    { nombre: "Celular", costo: "1000" }
]

//FIND
var encuentraArticulo = articulos.find(function(articulo) {
    return articulo.nombre === "Bici"
})

encuentraArticulo

//FORECH
articulos.forEach(function(articulo) {
    console.log(articulo.nombre)
})

//SOME
//Esta funciòn comprobara si existe en mi array articulos con costo menor o igual
var articulosBaratos = articulos.some(function(articulo) {
    return articulo.costo <= 700;
})

articulosBaratos