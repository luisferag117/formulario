let mainform = document.getElementById("mainform");
//Generar Captcha
let preguntaCaptcha = document.getElementById("preguntaCaptcha");
let captchaCorrecto
let verificarCaptcha = document.getElementById("captcha");
let verificacionCaptcha = document.getElementById("verificacionCaptcha");
function generarCaptcha(){
    verificarCaptcha.value = ""
    verificacionCaptcha.classList.remove("mal");
    verificacionCaptcha.classList.remove("bien");
    verificacionCaptcha.innerHTML = ""
    let num1 = Math.floor(Math.random() * 20);
    let num2 = Math.floor(Math.random() * 20);
    let correcto = num1 + num2;
    preguntaCaptcha.innerHTML = `¿Cuánto es ${num1} + ${num2} ?`
    captchaCorrecto = correcto ;
}
generarCaptcha();
console.log(captchaCorrecto);
verificarCaptcha.addEventListener("change",()=>{
    if(verificarCaptcha.value == captchaCorrecto){
        verificacionCaptcha.classList.remove("mal");
        verificacionCaptcha.innerHTML = "✔ Verificación Correcta"
        verificacionCaptcha.classList.add("bien");
    }
    else{
        verificacionCaptcha.classList.remove("bien");
        verificacionCaptcha.innerHTML = "✘ Respuesta Incorrecta: Intenta de nuevo"
        verificacionCaptcha.classList.add("mal");
    }
})
//
mainform.addEventListener("submit",function(event){
    event.preventDefault();
    alert("Uy cielos");
    //Validación del nombre
    let nombre = document.getElementById("nombre");
    let errorNombre = document.getElementById("errorNombre");
    if(isNaN(nombre.value))
        console.log("El nombre es: " + nombre.value);
    else
        errorNombre.textContent = "Nombre invalido";
    //Validación de la edad
    let edad = document.getElementById("edad");
    let errorEdad = document.getElementById("errorEdad")
    if (!edad || edad.value == "")
        errorEdad.textContent = "Edad no puesta"
    else{
        if(isNaN(edad.value) || parseInt(edad.value) > 100 || parseInt(edad.value) < 0){
            errorEdad.textContent = "La edad: " + edad.value + " no es válida"; 
        }
        else{
            errorEdad.textContent = "";
            console.log("¿Cuando cumples los?: " + (parseInt(edad.value)+1));
        }
    }
    //Validación del código postal
    let cp = document.getElementById("codigopostal");
    let errorCP = document.getElementById("errorCP");
    if(cp.value.length != 5 || isNaN(cp.value))
         errorCP.textContent = "El código postal: " + cp.value + " no es válido"
    else{
        console.log("El codigo postal: " + cp.value + " Bienvenido!")
        errorCP.textContent = ""
    }
    //Verificacion Genero
    let generos = [ "masculino", "femenino" ,"otros"  ];
    let genero = document.querySelector("input[name='genero']:checked");
    let errorGenero = document.getElementById("errorGenero");
    if (!genero)
        errorGenero.textContent = "Genero no elegido";
    else{
        if(generos.indexOf(genero.value) != -1){      
        console.log("Tu genero es " + genero.value);
        errorGenero.textContent = ""
        }
        else
            errorGenero.textContent = "El género: " + genero.value + " no es válido";
    }
    //Verificacion Pais
    let paises = [ "mexico", "israel" ,"argentina", "colombia","chile","peru","francia","italia" ];
    let pais = document.querySelector("select[name='pais']");
    let errorPais = document.getElementById("errorPais");
    if(paises.indexOf(pais.value) != -1)
        console.log("Tu pais es " + pais.value);
    else{       
        errorPais.textContent = "El País: " + pais.value +  " no disponible o no es válido"
    }      
    //Verificacion Intereses
    let intereses = [ "tecnologia", "musica" ,"deporte", "arte" ];
    let interesUsuario = document.querySelectorAll("input[name='intereses']:checked");
    let errorInteres = document.getElementById("errorInteres");
    for(let i=0;i<interesUsuario.length;i++)
    {
        let valores=interesUsuario[i]
        if(intereses.indexOf(valores.value) != -1){
            console.log("Tu interes es " + valores.value);
            errorInteres.textContent = "";
        }
        else{
            let interesInValido = valores.value;
            errorInteres.textContent = "El interés: " + interesInValido + " no es válido"
        }
            
    }
    //Validar Captcha

});