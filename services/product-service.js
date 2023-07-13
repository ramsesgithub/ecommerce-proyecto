const listaProductos = async () => {const data = await fetch("https://64b07c10c60b8f941af5bd9e.mockapi.io/producto"); return data.json();} 
const listaPerfil = async () => {const data = await fetch("https://64b07c10c60b8f941af5bd9e.mockapi.io/perfil"); return data.json();} 
const verProducto = async id => {const data = await fetch(`https://64b07c10c60b8f941af5bd9e.mockapi.io/producto/${id}`); return data.json();} 



const crearProducto = async (nombre, precio, descripcion, imagen, categoria) => {
    return await fetch("https://64b07c10c60b8f941af5bd9e.mockapi.io/producto",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({nombre, precio, descripcion, imagen, categoria,id:uuid.v4()})
    })
}


const eliminarProducto = async id => {
    return await fetch(`https://64b07c10c60b8f941af5bd9e.mockapi.io/producto/${id}`, {
    method: "DELETE"
    });
};


const detalleProducto = async id => {
    return await fetch(`https://64b07c10c60b8f941af5bd9e.mockapi.io/producto/${id}`).then(responde => responde.json())
}


const editarProducto = async (nombre, precio, descripcion, imagen, id, categoria) => {
    return await fetch(`https://64b07c10c60b8f941af5bd9e.mockapi.io/producto/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({nombre, precio, descripcion, imagen, categoria})
    })
}



export const productServices = {
    listaProductos,
    crearProducto,
    detalleProducto,
    eliminarProducto,
    editarProducto,
    listaPerfil,
    verProducto
}
