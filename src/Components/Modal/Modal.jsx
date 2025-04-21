import c from "./modal.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validations from "./../Contacto/validations";
import axios from "axios";

export default function Modal({isModal, setIsModal, titleGen, textBold, textGen, serviceGen, background}){
   
   /* const recaptchaRef = useRef(null);
   const [captchaError, setCaptchaError] = useState("");

    const [captchaValido, setCaptchaValido] = useState(false)  */
    const navigate = useNavigate();
    const [touched, setTouched] = useState({});
    const [errors,setErrors] = useState({})

    const [form, setForm] = useState({
      name: "",
      email: "",
      number: "",
      servicio: serviceGen !== "gen" ? serviceGen : "",
      message: ""
      });

    const toggleMenu = () => {
        setIsModal(!isModal);
      };

    /* function onChange(value) {
        setCaptchaValido(true);
        setCaptchaError("");
    } 

    function onExpired() {
      setCaptchaValido(false);
      setCaptchaError("El reCAPTCHA ha expirado, por favor verifica nuevamente.");
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
         /* if (!captchaValido) {
            setCaptchaError("Por favor, completa el reCAPTCHA antes de enviar.");
            return;
         } */

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
                  /* recaptchaRef.current.reset();
                  setCaptchaValido(false); */
                  navigate('/formEnviado');
             }
         } catch (error) {
             console.error("Error al enviar el formulario:", error);
             alert("Hubo un error al enviar el formulario.");
         }
     }

    return(<div className={c.modal}>
      
      <div className={`${c.container}`} style={{
        backgroundImage: `url(${background}), linear-gradient(rgba(0, 0, 0, 0.635), rgba(0, 0, 0, 0.58))`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '9px'
        /* boxShadow: 'inset 0px -7px 10px rgba(0, 0, 0, 0.5), inset 0px 6px 10px rgba(0, 0, 0, 0.5)' */
      }} >

      <div className={c.crossCont}>
      <svg onClick={toggleMenu} width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="2.03571" y1="1.91497" x2="24.0357" y2="22.915" stroke="white" strokeWidth="3"/>
      <line x1="1.96427" y1="22.915" x2="23.9638" y2="1.91499" stroke="white" strokeWidth="3"/>
      </svg>
      </div>


       <div className={c.items}>
         
         <div className={c.title}>
            <p>{titleGen}</p>
         </div>

         <div className={c.text}>
            <p><span className={c.bold}>{textBold}</span>{textGen} </p>
         </div>

         <div className={c.form} >
         <div className={c.inputCont}>
             <input type="text" name="name" id="name" value={form.name} placeholder="Nombre" onClick={onClick} onChange={(e) => handleInputChange(e)}/>
          {errors.name && <p className={c.warning}>{errors.name}</p>}
     
          <input type="email" name="email" id="email" placeholder="Email" value={form.email} onClick={onClick} onChange={(e) => handleInputChange(e)}/>
          {errors.email && <p className={c.warning}>{errors.email}</p>}
     
          <input type="text" name="number" id="number" placeholder="Teléfono" value={form.number} onChange={(e) => handleInputChange(e)}/>
     </div>
     <div className={c.selectCont}>
      <div className={c.select}>
      <select name="servicio" id="servicio" value={form.servicio} onChange={(e) => handleInputChange(e)}>
         {serviceGen === "calderas" ? <option value="calderas" >Calderas</option> : 
         serviceGen === "aire acondicionado" ? <option value="aire acondicionado">Aire Acondicionado</option> :
         serviceGen === "heladeras" ? <option value="heladeras">Heladeras</option> :
         serviceGen === "calefactores" ? <option value="calefactores">Calefactores</option> : <>
         <option hidden value="" >Seleccione el Servicio</option>
         <option value="aire acondicionado">Aire Acondicionado</option>
         <option value="calderas">Calderas</option>
         <option value="heladeras">Heladeras</option>
         <option value="calefactores">Calefactores</option>
         </>}
         
         
      </select>
      </div> 
      </div>


     <textarea className={c.textarea} name="message" value={form.message} id="" cols="30" rows="4" placeholder="Tu Problema..." onChange={(e) => handleInputChange(e)}></textarea>
     
     {/* <div className={c.cache}>
       <ReCAPTCHA
       ref={recaptchaRef}
       sitekey="6LcJ9v0qAAAAAAKw97n4pUAfz-KU6QuQNVeHg5lh"
       onChange={onChange}
       onExpired={onExpired} className={c.iframe}/>
     </div>
     {captchaError && <p className={`${c.captchaMsj} ${c.warning}`}>{captchaError}</p>} */}


     <div className={c.sendCont}>
       <div className={c.buttonCont}>
       <button  onClick={handleSubmit}  id="sobre" className={c.button} disabled={Object.keys(errors).length > 0  || /* !captchaValido  || */ (form.name === "" || form.email === "")}    >Solicitar Asesoramiento</button>   
       </div>
    </div>

    </div>

       </div>


       </div>
    </div>)
    }