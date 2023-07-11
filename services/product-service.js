const listaProductos = async () => {const data = await fetch("https://apirestone.onrender.com/productos"); return data.json();} 
const listaPerfil = async () => {const data = await fetch("https://apirestone.onrender.com/perfil"); return data.json();} 
const verProducto = async id => {const data = await fetch(`https://apirestone.onrender.com/productos/${id}`); return data.json();} 



const crearProducto = async (nombre, precio, descripcion, imagen, categoria) => {
    return await fetch("https://apirestone.onrender.com/productos",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({nombre, precio, descripcion, imagen, categoria,id:uuid.v4()})
    })
}


const eliminarProducto = async id => {
    return await fetch(`https://apirestone.onrender.com/productos/${id}`, {
    method: "DELETE"
    });
};


const detalleProducto = async id => {
    return await fetch(`https://apirestone.onrender.com/productos/${id}`).then(responde => responde.json())
}


const editarProducto = async (nombre, precio, descripcion, imagen, id, categoria) => {
    return await fetch(`https://apirestone.onrender.com/productos/${id}`,{
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
