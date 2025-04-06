import c from "./inicioalt.module.css"
import logo1 from "./logo1.svg"
import logo2 from "./logo2.svg"
import logo3 from "./logo3.svg"

export default function InicioAlt(){

    
    const scrollToContact = () => {
        document.getElementById("contactSection").scrollIntoView({ behavior: "smooth" });
    };
    

    return(<div className={`${c.inicio} ${c.bg}`}>
 
    <div className={c.container}>
    
    <div className={c.leftCont}>

    <div className={`${c.h1} ${c.transform}`}>
        <h1>TRABAJOS</h1>
     </div>

     <div className={c.p}>

     <p>En la sección <span>TRABAJOS de CLIMATIZACIONES TONY</span> podrás encontrar los resultados de contratar nuestros servicios.<br></br>Aire Acondicionado, Calderas, Heladeras y Calefactores!<br></br><span className={c.underline}>Estamos a su Servicio</span></p>

     </div>

     <div className={c.items}>
        <div className={`${c.item1} ${c.transformH}`}>
            <span className={c.logo}>
            <img src={logo1} alt="phone icono" />
            </span>
            <div className={c.text}>Atención Inmediata</div>
        </div>
        <div className={`${c.item2} ${c.transformH}`}>
            <span className={c.logo}>
                <img src={logo2} alt="money icono" />
            </span>
            <div className={c.text}>Ofertas
Imperdibles</div>
        </div>
        <div className={`${c.item3} ${c.transformH}`}>
            <span className={c.logo}>
                <img src={logo3} alt="community icono" />
            </span>
            <div className={c.text}>Clientes Felices</div>
        </div>
     </div>

     <div className={c.buttonCont}>

     <div onClick={scrollToContact} className={`${c.button} ${c.transform}`}>
     <span>@</span> Contactanos 
     </div>
     
     </div>

    </div>

    </div>
 
    </div>)
 }