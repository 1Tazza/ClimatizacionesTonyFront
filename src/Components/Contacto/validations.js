export default function validations(input, touched) {

    var errors = {};
    
    if(touched.name){
        if(!input.name) {
            errors.name = "Este campo es obligatorio."
        }
        else if(!input.name.match("^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$")) {
            console.log(touched.name)
            errors.name = "El nombre no debe contener números o caracteres especiales."
        }
    }

    
    if (touched.email) {
        if (!input.email) {
            errors.email = "Este campo es obligatorio.";
        } else if (!input.email.match(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/)) {
            errors.email = "Por favor, introduce una dirección de correo electrónico válida.";
        }
    }
    
    
    return errors
    }
    