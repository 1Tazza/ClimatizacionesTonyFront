import c from "./chooseus.module.css"
export default function ChooseUs(){

   

   return(<div className={c.chooseUs}>

   <div className={`${c.container} ${c.bg}`}>
    
   <div className={c.title}>¿Por qué elegirnos?</div>
  
   <div className={c.text}>
        
    <p>En CLIMATIZACIONES TONY, ofrecemos instalación, reparación y mantenimiento de Aire Acondicionado, Calderas, Heladeras y Calefactores, con técnicos especializados en cada área. Además contamos con <span>DESCUENTOS</span> periódicos para que accedas a la mejor calidad al mejor precio.</p>

   </div> 

   </div>
  
  </div>)
}