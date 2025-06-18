let mainform = document.getElementById("mainform");
let nombre = document.getElementById("nombre");
let cp = document.getElementById("codigopostal");
let edad = document.getElementById("edad");
mainform.addEventListener("submit",function(event){
    event.preventDefault();
    alert("Uy cielos");
    console.log("El nombre es: " + nombre.value);
    if(cp.value.length == 5)
        console.log("El codigo postal: " + cp.value + " Bienvenido!")
    else
        alert("El codigo postal: " + cp.value + "no es válido")
    if(isNaN(edad.value)){
        edad.value="";
        edad.style.borderColor = "red";
        edad.placeholder = "Edad invalida";
    }
    else
        console.log("¿Cuando cumples los?: " + (parseInt(edad.value)+1));

    let generos = [ "masculino", "femenino" ,"otros"  ];
    let genero = document.querySelector("input[name='genero']:checked");
    if(generos.indexOf(genero.value) != -1)
        console.log("Tu genero es " + genero.value);
    else
        alert("El género: " + genero.value + "no es válida")
    let paises = [ "mexico", "israel" ,"argentina", "colombia","chile","peru","francia","italia" ];
    let pais = document.querySelector("select[name='pais']");

    if(paises.indexOf(pais.value) != -1)
        console.log("Tu pais es " + pais.value);
    else
        pais.style.borderColor = "red";

    let intereses = [ "tecnologia", "musica" ,"deporte", "arte" ];
    let interesUsuario = document.querySelectorAll("input[name='intereses']:checked");
    for(let i=0;i<interesUsuario.length;i++)
    {
        let valores=interesUsuario[i]
        if(intereses.indexOf(valores.value) != -1)
            console.log("Tu interes es " + valores.value);
        else
            interesUsuario.borderColor="red";
    }

});