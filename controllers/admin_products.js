import { productServices } from "../services/product-service.js";

const crearProductoAdmin = (nombre, precio, descripcion, imagen, id, categoria) => {
    const div = document.createElement("div");
    div.classList.add("producto__container__contenido__admin", "card");
    const contenido = `
        <div>
            <a class="producto__container__contenido__admin-a" id="${id}"><img src="../assets/delete.svg"></a>
            <a href="../pages/editar_producto.html?id=${id}"><img src="../assets/edit.svg"></a>
            <img class="producto__container__contenido--img" src="${imagen}" alt="">
        </div>
        <p class="producto__container__contenido-pro">${nombre}</p>
        <p class="producto__container__contenido-pre">$ ${precio}</p>
        <p class="producto__container__contenido-pre">#${id}</p>
    `
    div.innerHTML = contenido;
    const aEliminar = div.querySelector(".producto__container__contenido__admin-a");
    /* Funcion eliminar producto */
    aEliminar.addEventListener("click", e => {
        const id = aEliminar.id;
        Swal.fire({
            title: `¿Deseas eliminar el producto ${nombre}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar'
        }).then(function(result){
            if(result.isConfirmed) {
                productServices.eliminarProducto(id).then(()=>location.reload())
            }
        })
    });

    return div;
}

const containerAdmin = document.querySelector(".producto__container__admin");

const mostrarTodosProductos = async () =>{
    const data = await productServices.listaProductos();
    data.forEach(({nombre, precio, descripcion, imagen, id, categoria})=>{
        const nuevosProductos = crearProductoAdmin (nombre, precio, descripcion, imagen, id, categoria);
        containerAdmin.append(nuevosProductos);
    })
} 

mostrarTodosProductos();