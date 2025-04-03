import c from "./seohome.module.css"

export default function SeoHome() {

    return(<div className={c.seohome}>
    
        <div className={c.container}>
        
        <div className={c.titleCont}>
            {/* <p className={c.title}>¡Aprovecha nuestros <span className={c.green}>descuentos</span> en Climatización!</p> */}
            <p className={c.title}>Climatización Sin Límites: <span className={c.cold}>Instalación</span> y <span className={c.hot}>Reparación</span> en Todo Capital Federal</p>
            
        </div>

        <div className={c.text}>
        <ul>
    <li>Ofrecemos un servicio profesional de <strong>instalación de calderas y radiadores</strong>, garantizando un óptimo rendimiento para calefacción en hogares y edificios.</li>
    <li>¿Compraste un aire acondicionado y no podés instalarlo? <strong>¡Llamanos!</strong> Contamos con técnicos especializados en <strong>aire acondicionado frío calor</strong> para solucionar problemas como cuando no tira calor o tiene fallas en el rendimiento.</li>
    <li>Si buscas un <strong>servicio de reparación de aire acondicionado</strong>, nuestros expertos diagnostican y solucionan problemas en todo tipo de equipos, asegurando su correcto funcionamiento.</li>
    <li>Brindamos <strong>asesoramiento en calderas de calefacción eléctricas</strong>, ideales para un consumo eficiente y seguro.</li>
    <li>Hacemos servicio por <strong>TODA CAPITAL FEDERAL</strong> Baires Climatización.</li>
    
</ul>
        </div>
        
        </div>
        
    </div>)
}