import c from "./navnode.module.css";
import clientsImg from "./clients.svg";
import { Link } from "react-router-dom";

export default function NavNode({isOpen, setIsOpen, home}){

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return(<div className={`${c.navNode} ${isOpen ? c.open : ""}`}>

    <div className={c.container}>

    <div onClick={toggleMenu} className={c.crossCont}>
    <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="2.03571" y1="1.91497" x2="24.0357" y2="22.915" stroke="white" stroke-width="3"/>
<line x1="1.96427" y1="22.915" x2="23.9638" y2="1.91499" stroke="white" stroke-width="3"/>
</svg>
    </div>

    <div className={c.items}>

    <div className={`${c.item} ${c.item1}`}>
      <div className={c.subTitle}>
        <p>DESCUBRE NUESTROS TRABAJOS</p>
      </div>

      <div className={c.sectCont}>
        <div className={c.imgCont}>
          <img src="https://res.cloudinary.com/dapq4icmj/image/upload/v1742202451/Tony%20Clima/w7w7begwagw2ww0ype4s.png" alt="" />
        </div>
        
        <Link className={c.link} to={home ? "/" : "/trabajos"} onClick={() => {
        window.scrollTo(0, 0);}}>
        <div className={c.itemText}>
        {home ? <p>INICIO</p> : <p>TRABAJOS</p>}
        </div>
        </Link>
        
      </div>
    </div>

    
    <div className={c.text}>
        <p>Selecciona un Servicio y comunicate con un experto.</p>
    </div>

{/* 
    <div className={`${c.item} ${c.item2}`}>
      <div className={c.subTitle}>
        <p>CLIMATIZACIÓN</p>
      </div>

      <div className={c.sectCont}>
        <div className={c.imgCont}>
          <img src="https://res.cloudinary.com/dapq4icmj/image/upload/v1742669002/Tony%20Clima/cjukko5ujyvijaqmmbr7.png" alt="" />
        </div>

        <div  className={c.itemText}>
          <p>AIRE ACONDICIONADO</p>
        </div>
      </div>
    </div>

    <div className={`${c.item} ${c.item3}`}>
      <div className={c.subTitle}>
        <p>REFRIGERACIÓN</p>
      </div>

      <div className={c.sectCont}>
        <div className={c.imgCont}>
          <img src="https://res.cloudinary.com/dapq4icmj/image/upload/v1742669005/Tony%20Clima/hd3gp1ty3aakgcbssnpy.png" alt="" />
        </div>

        <div  className={c.itemText}>
          <p>HELADERAS</p>
        </div>
      </div>
    </div>

    <div className={`${c.item} ${c.item4}`}>
      <div className={c.subTitle}>
        <p>CALEFACCIÓN</p>
      </div>

      <div className={c.sectCont}>
        <div className={c.imgCont}>
          <img className={c.img4} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1742669042/Tony%20Clima/xzkib3i9fxyysiyatqms.png" alt="" />
        </div>

        <div  className={c.itemText}>
          <p>CALDERAS</p>
        </div>
      </div>

      <div className={c.sectCont}>
        <div className={c.imgCont}>
          <img src="https://res.cloudinary.com/dapq4icmj/image/upload/v1742669025/Tony%20Clima/aqpn0f056lc3kcgpgctw.png" alt="" />
        </div>

        <div  className={c.itemText}>
          <p>CALEFACTOR DE TIRO BALANCEADO</p>
        </div>
      </div>
    </div>   */}

    </div>


    <div className={c.conoceSect}>
        <div className={c.conoceImg}>
            <img src={clientsImg} alt="" />
        </div>

        <div>
            <div className={c.conoceText}>
              <p>Hacenos tu Consulta y te asesoramos con tus problemas de Climatización</p>
            </div>
            
            <div className={c.buttonCont}>
            <Link className={c.link} to="/trabajos" onClick={() => {
             window.scrollTo(0, 0);}}>
           <div className={`${c.button} ${c.orange}`}>Conocé más</div>
           </Link>
            </div>
        </div>
    </div>
    

    </div>
    </div>)
}