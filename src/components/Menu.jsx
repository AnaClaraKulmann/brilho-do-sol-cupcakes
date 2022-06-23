import React from "react";
import '../css/menu.css'
import { Link } from "react-router-dom";
import LogoBrilho from '../foto-logo/logo-brilho.png'


const Menu = () => {
    return(
        <> 
          <nav className="header">
              <img className="logoBrilho" src={LogoBrilho} alt='logo brilho do sol' />
              <ul className="header-ul">
                <li><Link className="header-li" to='/'>Home</Link></li>
                <li><Link className="header-li" to='/cupcakes'>Cupcakes</Link></li>
                <li><Link className="header-li" to='/bento-cakes'>Bentô Cakes</Link></li>
                <li><Link className="header-li" to='/pao-de-mel'>Pão de Mel</Link></li>
                <li><Link className="header-li" to='/donuts'>Donuts</Link></li>
                <li><Link className="header-li" to='/biscoitos-amanteigados'>Biscoitos Amanteigados</Link></li>
                <li><Link className="header-li" to='/contato'>Contato</Link></li>
              </ul>
          </nav>
        </>
    )
}

export default Menu