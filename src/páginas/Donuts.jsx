import React from "react";
import '../css/donuts.css'

import Menu from "../components/Menu";
import Footer from "../components/Footer";

import Ft1Donuts from '../fotos-donut/ft1-donut.jpeg'
import Ft2Donuts from '../fotos-donut/ft2-donut.jpeg'
import Ft3Donuts from '../fotos-donut/ft3-donut.jpeg'
import Ft4Donuts from '../fotos-donut/ft4-donut.jpeg'

import Ft5Donuts from '../fotos-donut/ft5-donut.jpeg'
import Ft6Donuts from '../fotos-donut/ft6-donut.jpeg'
import Ft7Donuts from '../fotos-donut/ft7-donut.jpeg'
import Ft8Donuts from '../fotos-donut/ft8-donut.jpeg'

const Donuts = () => {
    return(
        <>
          <Menu />
            <h1 className="donuts">Donuts</h1>
            <h4 className="subtituloDonuts">Nossos Donuts são preparados com uma massa que descansa por mais de 
             3 horas.. cortados, <br></br> descansam novamente para depois serem fritos e decorados
             com uma deliciosa <br></br> cobertura de chocolate preto/branco ou glaceados.</h4>

           <div>
             <img className="ft1-donuts" src={Ft1Donuts} alt='Foto 1 página Donuts' />
             <img className="ft1-donuts" src={Ft2Donuts} alt='Foto 2 página Donuts' />
             <img className="ft1-donuts" src={Ft3Donuts} alt='Foto 3 página Donuts' />
             <img className="ft1-donuts" src={Ft4Donuts} alt='Foto 4 página Donuts' />
           </div>

           <div>
             <img className="ft2-donuts" src={Ft5Donuts} alt='Foto 5 página Donuts' />
             <img className="ft2-donuts" src={Ft6Donuts} alt='Foto 6 página Donuts' />
             <img className="ft2-donuts" src={Ft7Donuts} alt='Foto 7 página Donuts' />
             <img className="ft2-donuts" src={Ft8Donuts} alt='Foto 8 página Donuts' />
           </div>
          <Footer />
       </>
    )
}

export default Donuts