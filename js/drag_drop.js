const dropArea = document.querySelector(".form__agregar__area");
const dropText = dropArea.querySelector("h2");
const inputFile = document.querySelector(".file");

let file;

inputFile.addEventListener("change", function(){
    file = this.files[0];
    dropArea.style.display="flex";
    mostrarImagen(file);
})


dropArea.addEventListener("dragover", e =>{
    e.preventDefault();
    dropArea.classList.add("active");
    dropText.textContent = "Suelta la imagen para cargarlo";
});

dropArea.addEventListener("dragleave", e =>{
    e.preventDefault();
    dropArea.classList.remove("active");
    dropText.textContent = "Arrastra una imagen y suelta";
});

dropArea.addEventListener("drop", e =>{
    e.preventDefault();
    file = e.dataTransfer.files[0]; //seleccionar el primer archivo
    dropArea.classList.remove("active");
    dropArea.classList.add("drop");
    dropText.textContent = "Arrastra una imagen y suelta";
    mostrarImagen(file)
});



const mostrarImagen = (file) => {
    const fileType = file.type; 
    const archivoValid = ["image/jpeg", "image/jpg", "image/png"]; //Validar el tipo de archivos a subir
    if(archivoValid.includes(fileType)){
        const fileReader = new FileReader;
        fileReader.addEventListener("load", e =>{
            const fileUrl = fileReader.result;
            let image = `<img src="${fileUrl}" class="form__agregar__area-img" alt="">`;
            dropArea.innerHTML=image;
        });
        fileReader.readAsDataURL(file);
    }else{
        alert(`TIPO DE ARCHIVO INVALIDO`);
    }
}