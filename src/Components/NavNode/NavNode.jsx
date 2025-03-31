import c from "./navnode.module.css";
import clientsImg from "./clients.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { handleModalGeneric, handleModalCaldera, handleModalAire, handleModalHeladera, handleModalCalefaccion } from "./modalGeneric";

export default function NavNode({isOpen, setIsOpen, home}){
  
  const [modalStr, setModalStr] = useState({
    titleGen: "",
    textBold: "",
    textGen: "",
    serviceGen: "",
    background: ""
  });

  const [isModal, setIsModal] = useState(false);

  const toggleModal = (f) => {
    f(setModalStr)
    setIsModal(!isModal);
  };
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
    return(<>
    <div className={`${c.navNode} ${isOpen ? c.open : ""} ${isModal ? c.blur : ""}`}>

    <div className={c.container}>

    <div className={c.crossCont}>
    <svg onClick={toggleMenu} width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="2.03571" y1="1.91497" x2="24.0357" y2="22.915" stroke="white" strokeWidth="3"/>
<line x1="1.96427" y1="22.915" x2="23.9638" y2="1.91499" stroke="white" strokeWidth="3"/>
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


    <div className={`${c.item} ${c.item2}`}>
      <div className={c.subTitle}>
        <p>CLIMATIZACIÓN</p>
      </div>

      <div className={c.sectCont}>
        <div className={c.imgCont}>
          <img src="https://res.cloudinary.com/dapq4icmj/image/upload/v1742669002/Tony%20Clima/cjukko5ujyvijaqmmbr7.png" alt="" />
        </div>

        <div  className={c.itemText}>
          <p className={c.pointer} onClick={() => toggleModal(handleModalAire)}>AIRE ACONDICIONADO</p>
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
          <p className={c.pointer} onClick={() => toggleModal(handleModalHeladera)}>HELADERAS</p>
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
          <p className={c.pointer} onClick={() => toggleModal(handleModalCaldera)}>CALDERAS</p>
        </div>
      </div>

      <div className={c.sectCont}>
        <div className={c.imgCont}>
          <img src="https://res.cloudinary.com/dapq4icmj/image/upload/v1742669025/Tony%20Clima/aqpn0f056lc3kcgpgctw.png" alt="" />
        </div>

        <div  className={c.itemText}>
          <p className={c.pointer} onClick={() => toggleModal(handleModalCalefaccion)}>CALEFACTOR DE TIRO BALANCEADO</p>
        </div>
      </div>
    </div>  

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
            
           <div onClick={() => toggleModal(handleModalGeneric)} className={`${c.button} ${c.orange} ${c.pointer}`}>Conocé más</div>
           
            </div>
        </div>
    </div>
    

    </div>
    </div>

    {isModal ? <Modal isModal={isModal} setIsModal={setIsModal} titleGen={modalStr.titleGen} textBold={modalStr.textBold} textGen={modalStr.textGen} serviceGen={modalStr.serviceGen} background={modalStr.background}/> : null}
    </>)
}