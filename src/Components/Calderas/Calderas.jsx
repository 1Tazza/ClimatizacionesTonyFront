import c from "./calderas.module.css"

export default function Calderas(){

  const scrollToContact = () => {
    document.getElementById("contactSection").scrollIntoView({ behavior: "smooth" });
  };

   return(<div id="calderaSection" className={c.calderas}>

    <div className={c.container}>

    <div className={c.sectionCont}>
      <div className={c.line}></div>
      <p className={c.sectionText}>CALDERAS</p>
      <div className={c.line}></div>
    </div>
    
    <div className={c.bandCont}>¡TRABAJAMOS CON TODAS LAS MARCAS!</div>

    <div className={c.brandsCont}>
    <div className={c.brandsBg}>

      <div className={c.band}>
       
      </div>

      <div className={c.brands}>

       <div className={c.imgCont1}>
         <img className={c.peisa} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1729848408/Climatizaciones/zgm5clxa8rs1girqv9sn.webp" alt="Calderas Peisa"   loading="lazy"/>
         <img className={`${c.baxi}`}  src="https://res.cloudinary.com/dapq4icmj/image/upload/v1729848569/Climatizaciones/hczxhbkbnin2y0htwkmu.png" alt=""   loading="lazy"/>
       </div>
       
       <div className={c.imgCont2}>
         <img className={c.ferroli} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1729848412/Climatizaciones/diavoxj0wjsz8hofhudl.png" alt="Calderas Ferroli"  loading="lazy"/>
         <img className={c.caldaia} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1729848401/Climatizaciones/ed2h6hueiwum5komaxw8.png" alt="Calderas Caldaia"   loading="lazy"/>
       </div>
       
       <div className={c.imgCont3}>
          <img className={c.ariston} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1729848584/Climatizaciones/z86fcvjedvmehbxryl69.png" alt="Calderas Ariston"   loading="lazy"/>
       </div>
       </div>

      <div className={c.buttonCont}>
        <div onClick={scrollToContact} className={`${c.button} ${c.orange}`}>CONTACTANOS</div>
      </div>
        
    </div>   
    </div>

    <div className={c.fLineCont}>
    <div className={c.finalLine}></div>
   </div>
 
    </div>
    </div>)}