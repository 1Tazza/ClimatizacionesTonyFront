import c from "./modal.module.css";

export default function Modal({isOpen, setIsOpen}){

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    return(<div className={c.modal}>
      
      <div className={c.container}>

      <div onClick={toggleMenu} className={c.crossCont}>
      <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="2.03571" y1="1.91497" x2="24.0357" y2="22.915" stroke="white" stroke-width="3"/>
      <line x1="1.96427" y1="22.915" x2="23.9638" y2="1.91499" stroke="white" stroke-width="3"/>
      </svg>
      </div>


       <div className={c.items}>
         
         <div>
            <p></p>
         </div>

         <div>
            <p></p>
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
    </div>)
    }