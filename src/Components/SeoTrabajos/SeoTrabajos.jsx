import c from "./seotrabajos.module.css"

export default function SeoTrabajos() {

    return(<div className={c.seoTrabajos}>
    
        <div className={c.container}>
        
        <div className={c.titleCont}>
            <p className={c.title}>¡Aprovecha nuestros <span className={c.green}>DESCUENTOS %</span> en Climatización!</p> 
            
        </div>

        <div className={c.text}>
        <ul>
    <li>💰 <strong>¡Aprovechá nuestros descuentos!</strong> Publicamos promociones periódicas en nuestra página.</li>
    <li>Nuestro equipo de <strong>técnicos en aire acondicionado</strong> está listo para brindarte asistencia rápida y eficaz.</li>
    <li>Nos especializamos en <strong>aires climatización</strong>, ofreciendo soluciones para hogares y empresas.</li>
    <li>Realizamos <strong>reparación de heladeras</strong>, asegurando que tus equipos de refrigeración funcionen correctamente.</li>
    <li>Ofrecemos <strong>reparación de fan aire acondicionado</strong>, garantizando su correcto funcionamiento y una distribución eficiente del aire.</li>
    <li>Si necesitas asistencia en <strong>climatización</strong>, nuestro <strong>servicio de reparación de aires acondicionados</strong> es la mejor opción para mantener tus equipos en perfecto estado.</li>
</ul>
        </div>
        
        </div>
        
    </div>)
}