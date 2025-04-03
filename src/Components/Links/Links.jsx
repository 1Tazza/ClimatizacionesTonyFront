import c from "./links.module.css"
import line from "./line.svg"

export default function Links(){

    return(<div className={c.links}>

        <div className={c.container}>

         <div>  

            <div>
                <h2>Sobre Nosotros</h2>

                <img src={line} alt="" />

                <ul>
                    <li>
                    <a className={c.choose} href="#sobreNosotros">¿Por qué elegirnos?</a>
                    </li>
                    
                </ul>
            </div>
            
            {/* <div className={c.logoContainer}>
            <img  className={c.logo} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1729847749/Climatizaciones/jq7jluduurgjicbxloh9.png" alt="" loading="lazy"/>
            <p className={c.text5}>tu compañía de confianza.</p>
            </div> */}
         </div>

         <div>
         <h2><a href="https://climatizacionestony.com/trabajos" style={{all: "unset", cursor: "pointer"}}>Trabajos</a></h2>
         <img src={line} alt="" />
         </div>

         <div>
         <h2><a href="#servicios" style={{all: "unset", cursor: "pointer"}}>Servicios</a></h2>
         <img src={line} alt="" />
         </div>

         <div>
            <h2>Horario de Atención</h2>

            <img src={line} alt="" />

            <p style={{marginTop:"1.5rem"}}>Lunes a Sábados</p>

            <p>08:00 - 21:00</p>
          <div className={c.contactar}>
          <div className={c.chooseTitle}>
          <a href="https://wa.link/4esc8w" style={{all: "unset"}} target="_blank" rel="noreferrer">Contactar</a>
            </div>
         </div>
         </div>


        </div>

    </div>)

}