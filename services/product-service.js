const listaProductos = async () => {const data = await fetch("http://localhost:3000/productos"); return data.json();} 

const crearProducto = (nombre, precio, descripcion, imagen, categoria) => {
    return fetch("http://localhost:3000/productos",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({nombre, precio, descripcion, imagen, categoria,id:uuid.v4()})
    })
}


export const productServices = {
    listaProductos,
    crearProducto,
}
