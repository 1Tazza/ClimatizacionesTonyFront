import c from "./about.module.css"

export default function About() {


    return(<div id="sobreNosotros" className={c.about}>
    
    <div  className={c.container}>
     
      <div className={c.imgCont}>
        
        <img className={c.imgAbout} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1742202028/Tony%20Clima/v111mv1xxsoxvwdoj78r.jpg" alt="CLIMATIZACION SOBRE NOSOTROS" loading="lazy" />
        <div className={c.aboutText}>¿Quiénes somos?</div>
       
      </div>

      <div className={c.text}>
        
        <div className={c.aboutTextResp}>¿Quiénes somos?</div>
        
        <p><span className={c.italic}>CLIMATIZACIONES TONY</span> es una organización, conformada por técnicos especialistas con más de <span>15 años de Experiencia</span>. Trabajamos en conjunto para resolver <span>TUS PROBLEMAS</span> de Climatización.</p>

      </div> 

 
    </div>


    </div>)
}