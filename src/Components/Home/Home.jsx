import About from "../About/About"
import Calderas from "../Calderas/Calderas"
import ChooseUs from "../Choose Us/ChooseUs"
import Contacto from "../Contacto/Contacto"
import Inicio from "../Inicio/Inicio"
import Services from "../Services/Services"
import Trabajos from "../Trabajos/Trabajos"
import Nav from "../Nav/Nav"

export default function Home(){

   

   return(<div>

   <Nav home={false}/>

   <Inicio/>

   <About/>

   <Services/>

   <Calderas/>

   <Trabajos/>

   <ChooseUs/>

   </div>)
}