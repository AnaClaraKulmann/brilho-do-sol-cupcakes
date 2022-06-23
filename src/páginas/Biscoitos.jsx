import React from "react";
import '../css/biscoitos.css'

import Menu from "../components/Menu";
import Footer from "../components/Footer";

import Ft1Biscoitos from '../fotos-biscoito/ft1-biscoitos.jpeg'
import Ft2Biscoitos from '../fotos-biscoito/ft2-biscoitos.jpeg'
import Ft3Biscoitos from '../fotos-biscoito/ft3-biscoitos.jpeg'
import Ft4Biscoitos from '../fotos-biscoito/ft4-biscoitos.jpeg'

import Ft5Biscoitos from '../fotos-biscoito/ft5-biscoitos.jpeg'
import Ft6Biscoitos from '../fotos-biscoito/ft6-biscoitos.jpeg'
import Ft7Biscoitos from '../fotos-biscoito/ft7-biscoitos.jpeg'
import Ft8Biscoitos from '../fotos-biscoito/ft8-biscoitos.jpeg'

import Ft9Biscoitos from '../fotos-biscoito/ft9-biscoitos.jpeg'
import Ft10Biscoitos from '../fotos-biscoito/ft10-biscoitos.jpeg'
import Ft11Biscoitos from '../fotos-biscoito/ft11-biscoitos.jpeg'
import Ft12Biscoitos from '../fotos-biscoito/ft12-biscoitos.jpeg'

import Ft13Biscoitos from '../fotos-biscoito/ft13-biscoitos.jpeg'
import Ft14Biscoitos from '../fotos-biscoito/ft14-biscoitos.jpeg'
import Ft15Biscoitos from '../fotos-biscoito/ft15-biscoitos.jpeg'
import Ft16Biscoitos from '../fotos-biscoito/ft16-biscoitos.jpeg'


const Biscoitos = () => {
    return(
        <>
          <Menu />
            <h1 className="biscoitos">Biscoitos Amanteigados</h1>
            <h4 className="descricaoBiscoito">Nossos biscoitos são feitos com uma deliciosa massa 
            amanteigada que se desmancha na boca! <br></br> Temos eles em suas duas versões: sem decoração ou 
            personalizados do jeitinho que você desejar.</h4>
          
           <div>
             <img className="ft1-biscoitos" src={Ft1Biscoitos} alt='Foto 1 página Biscoitos' />
             <img className="ft1-biscoitos" src={Ft2Biscoitos} alt='Foto 2 página Biscoitos' />
             <img className="ft1-biscoitos" src={Ft3Biscoitos} alt='Foto 3 página Biscoitos' />
             <img className="ft1-biscoitos" src={Ft4Biscoitos} alt='Foto 4 página Biscoitos' />
           </div>
         
           <div>
             <img className="ft2-biscoitos" src={Ft5Biscoitos} alt='Foto 5 página Biscoitos' />
             <img className="ft2-biscoitos" src={Ft6Biscoitos} alt='Foto 6 página Biscoitos' />
             <img className="ft2-biscoitos" src={Ft7Biscoitos} alt='Foto 7 página Biscoitos' />
             <img className="ft2-biscoitos" src={Ft8Biscoitos} alt='Foto 8 página Biscoitos' />
           </div>

           <div>
             <h2 className="subtitulo-pascoa">Especial Páscoa</h2>
              <img className="ft3-biscoitos" src={Ft9Biscoitos}  alt='Foto 9 página Biscoitos' />
              <img className="ft3-biscoitos" src={Ft10Biscoitos} alt='Foto 10 página Biscoitos' />
              <img className="ft3-biscoitos" src={Ft11Biscoitos} alt='Foto 11 página Biscoitos' />
              <img className="ft3-biscoitos" src={Ft12Biscoitos} alt='Foto 12 página Biscoitos' />
           </div>
          
           <div>
             <h2 className="subtitulo-natal">Especial Natal</h2>
              <img className="ft4-biscoitos" src={Ft13Biscoitos} alt='Foto 13 página Biscoitos' />
              <img className="ft4-biscoitos" src={Ft14Biscoitos} alt='Foto 14 página Biscoitos' />
              <img className="ft4-biscoitos" src={Ft15Biscoitos} alt='Foto 15 página Biscoitos' />
              <img className="ft4-biscoitos" src={Ft16Biscoitos} alt='Foto 16 página Biscoitos' />
           </div>
          <Footer />
        </>
    )
}

export default Biscoitos