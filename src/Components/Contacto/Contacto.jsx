import c from "./contacto.module.css";
import { useState } from "react";
import validations from "./validations";
import axios from "axios"

export default function Contacto(){
    
    /* const [captchaValido, setCaptchaValido] = useState(false) */
    const [touched, setTouched] = useState({});
    const [errors,setErrors] = useState({})

    const [form, setForm] = useState({
        name: "",
        email: "",
        number: "",
        servicio: "",
        message: ""
        });

    /* function onChange(value) {
        setCaptchaValido(true)
      } */

    function onClick(e){
        setTouched({...touched, [e.target.name]: true})
     }
   
   
    function handleInputChange(e) {
        e.preventDefault();
        setForm({...form, [e.target.name]: e.target.value});
        
        setErrors(validations(
           {...form, [e.target.name]: e.target.value}, touched
           ))
     }

     async function handleSubmit() {
        try{
           
            const response = await axios.post("https://climatizacionestonyback-production.up.railway.app/sendForm", form);
            
            if (response.status === 200) {
                alert("Formulario enviado con éxito.");
                setForm({
                 name: "",
                 email: "",
                 number: "",
                 servicio: "",
                 message: ""
             });
            }
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            alert("Hubo un error al enviar el formulario.");
        }
    }

   return(<div id="contactSection" className={c.conctacto}>
 
   <div className={c.container}>

    <div className={c.sectionCont}>
      <div className={c.line}></div>
      <p className={c.sectionText}>CONTACTO</p>
      <div className={c.line}></div>
    </div>
 
    <div className={c.formContainer}>
    <div className={`${c.formSection} ${c.bg}`}>
         
        <div className={c.items}>
        <div className={c.item}>
            <div>
            <img className={c.mail} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1729849752/Climatizaciones/msvpnvtafhg1ga6ampy0.png" alt="" />
            </div>

            <div className={c.itemText}>
                <p>Mar07orly@gmail.com</p>
            </div>

        </div>

        <div className={c.item}>
            <div>
            <img className={c.wppImg}  src="https://res.cloudinary.com/dapq4icmj/image/upload/v1729848153/Climatizaciones/sxgo5xgsiqhu47mq1cek.png" alt="" />
            </div>

            <div className={c.itemText}>
                <p>+54 9 11 3822-4883</p>
            </div>

        </div>

        <div className={c.item}>
            <div>
            <img className={c.location} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1729849749/Climatizaciones/tnbsrtl31gdvyes2gv7b.png" alt="" />
            </div>

            <div className={c.itemText}>
                <p>Solís 843. Caba</p>
            </div>

        </div>
        </div> 


        <div className={c.text}>
            <p>o<br /> COMPLETA EL SIGUIENTE FORMULARIO</p>
        </div>


        <div className={c.form}>
         <div className={c.inputCont}>
             <input type="text" name="name" id="name" value={form.name} placeholder="Nombre" onClick={onClick} onChange={(e) => handleInputChange(e)}/>
          {errors.name && <p className={c.warning}>{errors.name}</p>}
     
          <input type="email" name="email" id="email" placeholder="Email" value={form.email} onClick={onClick} onChange={(e) => handleInputChange(e)}/>
          {errors.email && <p className={c.warning}>{errors.email}</p>}
     
          <input type="text" name="number" id="number" placeholder="Teléfono (Recomendado)" value={form.number} onChange={(e) => handleInputChange(e)}/>
     </div>
     <div className={c.selectCont}>
      <div className={c.select}>
      <select name="servicio" id="servicio" value={form.servicio} onChange={(e) => handleInputChange(e)}>
         <option hidden value="" >Seleccione el Servicio</option>
         <option value="aire acondicionado">Aire Acondicionado</option>
         <option value="calderas">Calderas</option>
         <option value="heladeras">Heladeras</option>
         <option value="calefactores">Calefactores</option>
         
      </select>
      </div> 
      </div>


     <textarea name="message" value={form.message} id="" cols="30" rows="4" placeholder="Tu Problema..." onChange={(e) => handleInputChange(e)}></textarea>
     
     <div className={c.sendCont}>
       <div className={c.buttonCont}>
       <button  onClick={handleSubmit}  id="sobre" className={c.button} disabled={Object.keys(errors).length > 0  /* || !captchaValido  */ || (form.name === "" || form.email === "")}    >Enviar Mensaje</button>   
       </div>
    </div>

    </div>


    </div>
    </div>

   </div>

   </div>)
}