document.addEventListener("DOMContentLoaded",function(){
    const cabecera = document.querySelector("#header-container");
    fetch("header.html")
    .then(respuesta =>{
        if (!respuesta.ok){
            throw new Error("La respuesta no fue correcta");

        }
        return respuesta.text()
    

    })
    .then(datos =>{
        cabecera.innerHTML = datos;
    })
});


document.addEventListener("DOMContentLoaded",function(){
    const pie = document.querySelector("#footer-container");
    fetch("footer.html")
    .then(respuesta =>{
        if (!respuesta.ok){
            throw new Error("La respuesta no fue correcta");

        }
        return respuesta.text()
    

    })
    .then(datos =>{
        pie.innerHTML = datos;
    })
});
