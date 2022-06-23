import React from "react";
import '../css/contato.css'

import Menu from "../components/Menu";
import Footer from "../components/Footer";

const Contato = () => {
    return(
        <>
         <Menu />
            <h1 className="contato">Contato</h1>
             <h3 className="infos">Para mais informações e dúvidas, entre em contato conosco:</h3>
          
           <div className="rodape">
             <p className="whatsapp">- WhatsApp: <a href="https://api.whatsapp.com/send?phone=5551993278180" target={"_blank"} rel="noreferrer">(51)993278180</a></p>
             <p className="instagram">- Instagram: <a href="https://www.instagram.com/brilhodosolcupcakes/" target={"_blank"} rel="noreferrer">@brilhodosolcupcakes</a></p>
             <p className="facebook">- Página do Facebook: <a href="https://www.facebook.com/brilhosdosol/?ref=page_internal" target={"_blank"} rel="noreferrer">Brilho do Sol Cupcakes</a></p>
             <p className="frase-final">Personalizamos tudo para a sua festa! <br></br> Solicite orçamento.</p>
           </div>
         <Footer />
        </>
    )
}

export default Contato