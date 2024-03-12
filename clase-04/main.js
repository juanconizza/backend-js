//Así llamamos al file system de Nodejs y se utiliza todo con la variable fs y sus metodos como un clase.

const fs = require('fs');


let ruta_archivo = './data.json'
//importante: si la ruta contine alguna carpeta que no existe: NO LA CREA!
//manejemos este error con callbacks

// configuración que pid el metodo readFile del fs
let configuracion = 'utf-8'

// El contenido a crear.
let contenido = JSON.stringify(['nuevo',{ nombre:'igna' }],null,2)

// Metodo para escribir un archivo json con fs.

fs.writeFile(ruta_archivo,contenido,(error)=> {
    if (error) {
        console.log('ocurrió un error')
    }
})

// Metodo para leer un archivo json con fs

fs.readFile(ruta_archivo,configuracion,(error,resultado)=> {
    if (error) {
        return error
    }
    console.log(resultado)
    return resultado
})

// Borra TODO el contenido del archivo json. Comentado o descomentado segun pruebe.

/*
fs.unlink(ruta_archivo,(error)=> {
    if (error) {
        console.log('ocurrió un error')
    }
})*/



// Manejo de fs con promise para hacerla asincronica. 

fs.promises.writeFile(ruta_archivo,contenido)
    .then(res=>console.log('se escribió correctamente'))
    .catch(error=>console.log('ocurrió un error'))


// Leer con promise

fs.promises.readFile(ruta_archivo,configuracion)
    .then(res=>console.log(res))
    .catch(error=>console.log('ocurrió un error'))

// Eliminar con promise. Comentado o descomentado segun pruebe.
/*
fs.promises.unlink(ruta_archivo)
    .then(res=>console.log('se eliminó correctamente'))
    .catch(error=>console.log('ocurrió un error')) 
    */

