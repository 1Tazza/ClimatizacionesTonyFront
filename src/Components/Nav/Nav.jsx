import c from "./nav.module.css";
import { useEffect, useState } from "react";
import burgerNavImg from "./burgerNav.svg"
import NavNode from "../NavNode/NavNode";
import titleLogo from "./titleLogo.svg"

export default function Nav({home}){

    useEffect(() => {

     
        function handleScroll() {
            const navbar = document.querySelector(`.${c.nav}`);
            if (window.scrollY > 60) {
                navbar.classList.add(c.scrolled);
            } else {
                navbar.classList.remove(c.scrolled);
            }
        }
        
        // Ejecutar la función al cargar la página
        document.addEventListener("DOMContentLoaded", handleScroll);
        
        // Escuchar el evento de scroll
        window.addEventListener("scroll", handleScroll);
    },[])

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; // Bloquea el scroll del fondo
        } else {
            document.body.style.overflow = "auto"; // Restaura el scroll normal
        }
    
        return () => {
            document.body.style.overflow = "auto"; // Asegura que el scroll vuelva a la normalidad al desmontar
        };
    }, [isOpen]); 
    

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return(<>
    <div className={c.nav}>

    <div className={c.container}>

    <div onClick={toggleMenu} className={c.navItem}>
        <img className={c.burgerNavImg} src={burgerNavImg} alt="" />

        <div className={`${c.explore} ${c.poppins}`}>
            Explorar
        </div>
    </div>

    <div className={c.logoCont}>
    <div>
    <img className={c.logo} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1742199686/Tony%20Clima/bjgoa3ycflcsppa4fdw1.png" alt="" />
    </div>
    
    <div className={c.titleCont}>
    <img className={c.titleLogo} src={titleLogo} alt="" />
    </div>

    </div>

    <div onClick={toggleMenu} className={`${c.navItem} ${c.trabajosLink}`}>
        <img className={c.valijaImg} src="https://res.cloudinary.com/dapq4icmj/image/upload/v1742589503/Tony%20Clima/afobsp6cqztalu4vxspc.png" alt="" />

        <div className={`${c.trabajos} ${c.poppins}`}>
        Trabajos
        </div>
    </div>
    

    </div>
    </div>


    {isOpen ? <NavNode home={home} isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
    
    
    </>)
}
    