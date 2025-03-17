import About from "../About/About";
import InicioAlt from "../Inicio Alt/InicioAlt";
import Nav from "../Nav/Nav";
import OurWorksExtended from "../OurWorksExtended/OurWorksExtended";
import Calderas from "../Calderas/Calderas";
import c from "./sectiontrabajos.module.css";
import Compromise from "../Compromise/Compromise";
import Contacto from "../Contacto/Contacto";
import Footer from "../Footer/Footer";


export default function SectionTrabajos(){

return(<div className={c.sectionTrabajos}>
      
       <Nav home={true}/>

       <InicioAlt/>

       <About/>

       <OurWorksExtended/>

       <Calderas/>

       <Compromise/>

       <Contacto/>

       <Footer/>
       
       </div>)
}