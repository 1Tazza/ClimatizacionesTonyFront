import About from "../About/About";
import InicioAlt from "../Inicio Alt/InicioAlt";
import Nav from "../Nav/Nav";
import OurWorksExtended from "../OurWorksExtended/OurWorksExtended";
import Calderas from "../Calderas/Calderas";
import c from "./sectiontrabajos.module.css";
import Compromise from "../Compromise/Compromise";


export default function SectionTrabajos(){

return(<div className={c.sectionTrabajos}>
      
       <Nav home={true}/>

       <InicioAlt/>

       <About/>

       <OurWorksExtended/>

       <Calderas/>

       <Compromise/>
       
       </div>)
}