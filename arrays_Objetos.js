var articulos = [
    {nombre: "Bici", costo: "3000"},
    {nombre: "TV", costo: "3500"},
    {nombre: "Libro", costo: "500"},
    {nombre: "Celular", costo: "1000"}
]

//Recorrer un array para filtrarlo
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
})

articulosFiltrados

//Mapear un array
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
})