import c from "./services.module.css"

export default function Services(){

  const scrollToContact = () => {
    document.getElementById("contactSection").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCaldera = () => {
    document.getElementById("calderaSection").scrollIntoView({ behavior: "smooth" });
  };

   return(<div id="servicios" className={c.services}>

    <div className={c.sectionContDesk}>
      <div className={c.lineLeft}></div>
      <p className={c.sectionText}>SERVICIOS</p>
      <div className={c.lineRight}></div>
    </div>

   <div className={c.container}>
    
    <div className={c.sectionCont}>
      <div className={c.line}></div>
      <p className={c.sectionText}>SERVICIOS</p>
      <div className={c.line}></div>
    </div>

   <div className={`${c.itemsGrp} ${c.itemsGrp1}`}>
  
    <div className={`${c.item} ${c.bg1}`}>
      <div className={`${c.text1} ${c.blue}`}>
        <p>Climatización</p>
      </div>

      <div className={`${c.title}`}>
        <p className={c.transform}>Aire Acondicionado</p>
      </div>

      <div className={c.description}>
        <p className={c.transform}>Instalación, reparación y mantenimiento de Aire Acondicionado. <br/><br/></p>
      </div>

      <div className={c.buttonCont}>
        <div onClick={scrollToContact} className={`${c.button} ${c.blue}`}>CONTACTAR</div>
      </div>
    
    </div>

    <div className={`${c.item} ${c.bg2}`}>
      <div className={`${c.text1} ${c.orange}`}>
        <p>Calefacción</p>
      </div>

      <div className={c.title}>
        <p className={c.transform}>Calderas</p>
      </div>

      <div className={c.description}>
        <p className={c.transform}>Instalación, reparación y mantenimiento de Calderas de TODAS las Marcas! <br/><br/></p>
      </div>

      <div className={c.buttonCont}>
        <div onClick={scrollToCaldera} className={`${c.button} ${c.orange}`}>VER MÁS</div>
      </div>
    
    </div>
    </div>


   <div className={`${c.itemsGrp} ${c.itemsGrp2}`}>

   <div className={`${c.item} ${c.bg3}`}>
      <div className={`${c.text1} ${c.blue}`}>
        <p>Refrigeración</p>
      </div>

      <div className={c.title}>
        <p className={c.transform}>Heladeras</p>
      </div>

      <div className={`${c.description} ${c.fridgeDiv}`}>
        <p className={c.transform}>Reparación de Heladeras. <br/><br/><br/></p>
      </div>

      <div className={c.buttonCont}>
        <div onClick={scrollToContact} className={`${c.button} ${c.blue}`}>CONTACTAR</div>
      </div>
    
    </div>

    <div className={`${c.item} ${c.bg4}`}>
      <div className={`${c.text1} ${c.orange}`}>
        <p>Calefacción</p>
      </div>

      <div className={c.title}>
        <p className={c.transform}>Calefactores</p>
      </div>

      <div className={c.description}>
        <p className={c.transform}>Instalación, Reparación y Mantenimiento de Calefactores de Tiro Balanceado. <br/><br/></p>
      </div>

      <div className={c.buttonCont}>
        <div onClick={scrollToContact} className={`${c.button} ${c.orange}`}>CONTACTAR</div>
      </div>
    
    </div>

   </div>

   <div className={c.fLineCont}>
    <div className={c.finalLine}></div>
   </div>

   </div>

   </div>)
}