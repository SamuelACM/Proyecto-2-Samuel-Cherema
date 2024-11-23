let librosColeccion= [{
"Nombre":"Veinte mil leguas de viaje submarino",
"Paginas":786,
"Autor":"Julio Verne",
"Genero":["Historia de mar"],
"Diponible":true
},
{
"Nombre":"El principito",
"Paginas":120,
"Autor":"Antoine de Saint-Exupéry",
"Genero": ["Fabula ", "Ficcion ", "Novela Corta ", "Literatura Infantil "],
"Diponible":true
}] 

function gene(librosColeccion){
    let persona=" " ;
    for (let index = 0; index < librosColeccion.Genero.length; index++) {
        persona= persona + librosColeccion.Genero[index];  
    }
    return persona;
};

function informacionLibro(librosColeccion){
    if (librosColeccion.Diponible == true){
        return "El libro " + librosColeccion.Nombre + " tiene " + librosColeccion.Paginas + " paginas, fue escrito por " + librosColeccion.Autor + "y es del genero " +gene(librosColeccion) + " y esta disponible";
    }
    else{
        return"El libro " + librosColeccion.Nombre + " tiene " + librosColeccion.Paginas + " paginas, fue escrito por " + librosColeccion.Autor + "y es del genero " + gene(librosColeccion) + "y no esta disponible";
    }
};

function imprimirLibros(librosColeccion){
    if (librosColeccion.Diponible == true){
        return "Los libros disponibles son " + librosColeccion.Nombre;
    } 
};


let nuevoLibro={
    "Nombre":"Coraline",
    "Paginas":210,
    "Autor":"Neil Gaiman",
    "Genero":["Terror ", "Cuentos de Hadas ", "Literatura infantil"],
    "Diponible":true
}

function agregar(nuevoLibro){
    return librosColeccion.push(nuevoLibro);
};
agregar(nuevoLibro);

for (let index = 0; index < librosColeccion.length; index++) {
     
    console.log(imprimirLibros(librosColeccion[index]));
}

for (let index = 0; index < librosColeccion.length; index++) {
    let element = librosColeccion[index];
    console.log(informacionLibro(element))
}


