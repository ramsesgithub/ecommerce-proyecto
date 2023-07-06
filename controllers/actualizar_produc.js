import { productServices } from "../services/product-service.js";

const form = document.getElementById("formActualizar");
const dropArea = document.querySelector(".form__agregar__area");

const obtenerInformacionProducto = async () => {
    //url del html
    const url = new URL(location);
    //busca el parametro que le digamos en la url 
    const id = url.searchParams.get("id");
    //verificar que exista la url
    if(id === null){
        alert(`ERROR URL`);
    }

    const categoria = document.getElementById("selectProductos");
    const nombreProducto = document.getElementById("nombreProducto");
    const precio = document.getElementById("precioProducto");
    const descripcion = document.querySelector(".form__container-text");
    let imagen;
    try{
        const producto = await productServices.detalleProducto(id)
        //verificar si existe el nombre,precio,cat y des del producto a editar
        if(producto.nombre && producto.precio && producto.categoria && producto.imagen && producto.descripcion){
            //darle el valor del producto a editar a los inputs
            nombreProducto.value = producto.nombre;
            precio.value = producto.precio;
            categoria.value = producto.categoria;
            descripcion.value = producto.descripcion;
            imagen = `<img src="${producto.imagen}" class="form__agregar__area-img" alt="">`;
            dropArea.style.display="flex";
            dropArea.innerHTML=imagen;
        }else{
            throw new Error();
        }
    }catch (error) {
        alert(`ERROR`);
    }
}

obtenerInformacionProducto();

form.addEventListener("submit", e =>{
    e.preventDefault();

    const url = new URL(location);
    const id = url.searchParams.get("id");

    const categoria = document.getElementById("selectProductos").value;
    const nombreProducto = document.getElementById("nombreProducto").value;
    const precio = document.getElementById("precioProducto").value;
    const descripcion = document.querySelector(".form__container-text").value;
    const imagen = document.querySelector(".form__agregar__area-img").src;

    productServices.editarProducto(nombreProducto, precio, descripcion, imagen, id, categoria).then(()=>{
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Producto Editado Correctamente :)',
            showConfirmButton: false,
            timer: 1000,
        })
        location.href = "../pages/admin_productos.html";
    }).catch(e=>console.log(e));
})