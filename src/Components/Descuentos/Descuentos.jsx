import c from "./descuentos.module.css"
import config from "../../config";
import { useState, useEffect } from "react";


export default function Descuentos() {
    
    const [show, setShow] = useState(false);
    const [expirationDate, setExpirationDate] = useState("");
    
    const cupon = config.couponCode
    
    const scrollToContact = () => {
        document.getElementById("contactSection").scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const today = new Date();
        const dayOfWeek = today.getDay(); 
        let daysToAdd;

        if (dayOfWeek >= 2 && dayOfWeek <= 4) {
            daysToAdd = 4 - dayOfWeek;
            setShow(true);
        } else {
            daysToAdd = (4 - dayOfWeek + 7) % 7;
            setShow(false);
        }

        const nextThursday = new Date();
        nextThursday.setDate(today.getDate() + daysToAdd);

        const formatted = `${String(nextThursday.getDate()).padStart(2, "0")}/${String(nextThursday.getMonth() + 1).padStart(2, "0")}`;
        setExpirationDate(formatted);
    }, []);

    return(<div className={`${c.descuentos} ${!show ? c.display : ""}`}>

    <div className={c.container}>

        <p className={`${c.text} ${c.transform}`}><span className={c.bold}>¡Estás de suerte!</span>  Obtené un <span className={c.bold}>DESCUENTO EXCLUSIVO de 15% OFF</span> en todos nuestros servicios de climatización usando el código <span onClick={scrollToContact} className={`${c.bold} ${c.underlined} ${c.codigo}`}>{cupon}</span> <span className={c.bold}>| Válido hasta el {expirationDate}⏰</span></p>
    </div>

    </div>)
}