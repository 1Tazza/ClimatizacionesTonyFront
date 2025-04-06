import c from "./contacto.module.css";
import { useState, useRef } from "react";
import  config, { isCuponAvailable }from "../../config";
import validations from "./validations";
import axios from "axios";
import phoneImg from "./logo1.svg";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "../Footer/Footer";
import Links from "../Links/Links";

export default function Contacto(){
    const recaptchaRef = useRef(null); // Referencia para el reCAPTCHA
    const [captchaError, setCaptchaError] = useState("");
    const code = config.couponCode;
    
    const [captchaValido, setCaptchaValido] = useState(false) 
    const [touched, setTouched] = useState({});
    const [errors,setErrors] = useState({});
    const [cupon, setCupon] = useState(false);
    const [cuponValidation, setCuponValidation] = useState(null);
   

    const [form, setForm] = useState({
        name: "",
        email: "",
        number: "",
        servicio: "",
        message: "",
        cupon: false
        });

    const [cuponForm, setCuponForm] = useState({
        cupon: ""
        });

    function onChange(value) {
        setCaptchaValido(true);
        setCaptchaError("");
    } 

    function onExpired() {
        setCaptchaValido(false);
        setCaptchaError("El reCAPTCHA ha expirado, por favor verifica nuevamente.");
    }

    function onClick(e){
        setTouched({...touched, [e.target.name]: true})
     }
    
    function handleCupon(){
        if(cupon === true) {
        setCuponValidation(null);
        setCuponForm({
            cupon: ""
            });
        }
        setCupon(!cupon);
        
    }
   
    function handleSendCupon(){
        const available = isCuponAvailable();
        const value = cuponForm.cupon === code;
        
        const result =  available && value;
        if(cuponForm.cupon === "") {
            setCuponValidation(null)
        }
        else if(result) {
            setCuponValidation(true)
            setForm({...form,
                cupon: true
                });
        }
        else if(result === false){
            setCuponValidation(false)
        }
    }
   
    function handleInputChange(e) {
        e.preventDefault();
        setForm({...form, [e.target.name]: e.target.value});
        
        setErrors(validations(
           {...form, [e.target.name]: e.target.value}, touched
           ))
     }

     function handleChangeCupon(e) {
        e.preventDefault();
        setCuponForm({...cuponForm, [e.target.name]: e.target.value});
        
        
     }

     async function handleSubmit() {
            if (!captchaValido) {
                setCaptchaError("Por favor, completa el reCAPTCHA antes de enviar.");
                return;
            }
            
            try{
           
            const response = await axios.post("https://climatizacionestonyback-production.up.railway.app/sendForm", form);
            
            if (response.status === 200) {
                alert("Formulario enviado con éxito.");
                setForm({
                 name: "",
                 email: "",
                 number: "",
                 servicio: "",
                 message: "",
                 cupon: false
             });
                setCuponForm({
                cupon: ""
                });

             recaptchaRef.current.reset();
             setCaptchaValido(false);
            }
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            alert("Hubo un error al enviar el formulario.");
        }
    }

   return(<><div id="contactSection" className={c.conctacto}>
 
   <div className={c.container}>

    <div className={c.sectionCont}>
      <div className={c.line}></div>
      <p className={c.sectionText}>CONTACTO</p>
      <div className={c.line}></div>
    </div>
 
    
    <div className={`${c.formContainer} `}>

    <div className={`${c.formSection} ${c.bg}`}>
         
      <div className={c.formDesk}>
        <div className={c.items}>
        <div className={c.item}>
            <div>
            <img className={c.mail} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1729849752/Climatizaciones/msvpnvtafhg1ga6ampy0.png" alt="mail de contratista de aire acondicionado" />
            </div>

            <div className={c.itemText}>
                <p>Mar07orly@gmail.com</p>
            </div>

        </div>

        <div className={c.item}>
            <div>
            <img className={c.wppImg}  src="https://res.cloudinary.com/dapq4icmj/image/upload/v1729848153/Climatizaciones/sxgo5xgsiqhu47mq1cek.png" alt="whatsapp de contratista de calderas" />
            </div>

            <div className={c.itemText}>
                <p>+54 9 11 3822-4883</p>
            </div>

        </div>

        <div className={c.item}>
            <div>
            <img className={c.location} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1729849749/Climatizaciones/tnbsrtl31gdvyes2gv7b.png" alt="dirección de empresa de climatización" />
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
     
     <div className={c.descuentos}>
      {cuponValidation ? <p className={c.green}>Cupón Canjeado!!</p> :  <div className={c.contents}>
      <p className={c.cuponCont} onClick={handleCupon}>¿Tenés un cupón de descuento?</p>
      {cupon ? <div className={c.promoCont}>
        <input type="text" onClick={onClick} onChange={(e) => handleChangeCupon(e)} name="cupon" id="cupon" placeholder="Ingresa el código..."/>

        <button onClick={handleSendCupon} className={c.buttonPromo}>Aplicar</button>

      </div> : null}
       {cuponValidation === false ? <p className={c.red}>Código Inválido</p> : cuponValidation === null ? null: null}

      </div> }
      
      
     </div>

     <div className={c.cache}>
       <ReCAPTCHA
       ref={recaptchaRef}
       sitekey="6LcJ9v0qAAAAAAKw97n4pUAfz-KU6QuQNVeHg5lh"
       onExpired={onExpired}
       onChange={onChange}   className={c.iframe}/>
     </div>
     {captchaError && <p className={`${c.captchaMsj} ${c.warning}`}>{captchaError}</p>}

     <div className={c.sendCont}>
       <div className={c.buttonCont}>
       <button  onClick={handleSubmit}  id="sobre" className={c.button} disabled={Object.keys(errors).length > 0  || !captchaValido  || (form.name === "" || form.email === "")}    >Enviar Mensaje</button>   
       </div>
    </div>

    </div>
    </div>

   
    <div className={c.deskItemCont}>
       
       <div className={c.deskItem}>
         
         <div className={c.imgCont}>
            <img className={c.phoneImg} src={phoneImg} alt="Teléfono de empresa de climatización" />
         </div>

         <div className={c.callTime}>Horario de Atención de:<br />8 a 19 hs</div>

       </div>

    </div>



    </div>
    </div>

   </div>

   </div>
  
   <Links/>

   <Footer/>
   </>)
}