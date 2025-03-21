import c from "./trabajos.module.css"
import '@splidejs/splide/css/skyblue';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function Trabajos(){



   return(<div className={c.trabajos}>

    <div className={c.sectionContDesk}>
      <div className={c.lineLeft}></div>
      <p className={c.sectionText}>TRABAJOS</p>
      <div className={c.lineRight}></div>
    </div>

   <div className={c.container}>

   <div className={c.sectionCont}>
      <div className={c.line}></div>
      <p className={c.sectionText}>TRABAJOS</p>
      <div className={c.line}></div>
    </div>

    <div className={c.imgs}>
      <Splide options={{
              arrows: true,
              arrowPath: "M0 0H18.5507L40 20L18.5507 40H0L20.8696 20L0 0Z", // Personaliza las flechas
              type: 'loop', // Configuración opcional (loop infinito)
              perPage: 3, // 🖥️ 3 imágenes en escritorio
    breakpoints: {
      1024: { perPage: 2 }, // 📱 Tablets: 2 imágenes
      768: { perPage: 1 } // 📱 Móvil: 1 imagen
    }, // Número de imágenes visibles
              autoplay: true, // Auto-desplazamiento
              interval: 10000, // Tiempo entre cada slide (3 segundos)
        
            }} 
            aria-label="Climatizaciones Tony">
       <SplideSlide>
      <img className={c.img} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1742198183/Tony%20Clima/ud7qapgftdybzi68ztzp.jpg" alt="1"/>
      </SplideSlide>
      <SplideSlide>
      <img className={c.img} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1729847555/Climatizaciones/xywfcfs41c87bksv323g.png" alt="2"/>
      </SplideSlide>
      <SplideSlide>
      <img className={c.img} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1742202962/Tony%20Clima/wrruhncxdamnthqosii7.jpg" alt="3"/>
      </SplideSlide>
      <SplideSlide>
      <img className={c.img} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1729847549/Climatizaciones/o6qw04kagptsvt4iptir.png" alt="3"/>
      </SplideSlide>
      <SplideSlide>
      <img className={c.img} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1729847558/Climatizaciones/rwlf4izwm6krenzcmm9d.png" alt="4"/>
      </SplideSlide>
      <SplideSlide>
      <img className={c.img} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1742202761/Tony%20Clima/oikbkzpbz4qfmwjwdlau.jpg" alt="5"/>
      </SplideSlide>
      <SplideSlide>
      <img className={c.img} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1742198207/Tony%20Clima/rswyjqqdxo8pqwzyrxso.jpg" alt="6"/>
      </SplideSlide>
      <SplideSlide>
      <img className={c.img} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1742202876/Tony%20Clima/rrvgrqgx0k3494gxh7qv.jpg" alt="7"/>
      </SplideSlide>
      </Splide>
    </div>

    <div className={c.text}>
        
        
        <p><span className={c.italic}>CLIMATIZACIONES TONY</span> <br />Nuestra calidad y eficiencia se reflejan en cada trabajo. Como cliente, podés confiar en un servicio rápido y seguro para tu confort.</p>

      </div> 

      <div className={c.fLineCont}>
       <div className={c.finalLine}></div>
      </div>
  
  </div>
   </div>)}