import React from "react";
import '../css/paoMel.css'

import Menu from "../components/Menu";
import Footer from '../components/Footer'

import Ft1PaoMel from '../fotos-paoMel/ft1-paoMel.jpeg'
import Ft2PaoMel from '../fotos-paoMel/ft2-paoMel.jpeg'
import Ft3PaoMel from '../fotos-paoMel/ft3-paoMel.jpeg'
import Ft4PaoMel from '../fotos-paoMel/ft4-paoMel.jpeg'

import Ft5PaoMel from '../fotos-paoMel/ft5-paoMel.jpeg'
import Ft6PaoMel from '../fotos-paoMel/ft6-paoMel.jpeg'
import Ft7PaoMel from '../fotos-paoMel/ft7-paoMel.jpeg'
import Ft8PaoMel from '../fotos-paoMel/ft8-paoMel.jpeg'

const paoMel = () => {
    return(        
        <>
          <Menu />
            <h1 className="paoMel">Pão de Mel</h1>
            <h4 className="descricaoPaoMel">Uma surpreendente receita à base de mel e 
           um toque especial de <br></br> especiarias, banhado em uma cobertura sabor chocolate ao
           leite ou meio amargo!</h4>
           
           <div>
             <img className="ft1-paoMel" src={Ft1PaoMel} alt='Foto 1 página Pão de Mel' />
             <img className="ft1-paoMel" src={Ft2PaoMel} alt='Foto 2 página Pão de Mel' />
             <img className="ft1-paoMel" src={Ft3PaoMel} alt='Foto 3 página Pão de Mel' />
             <img className="ft1-paoMel" src={Ft4PaoMel} alt='Foto 4 página Pão de Mel' />
           </div>

           <div>
             <img className="ft2-paoMel" src={Ft5PaoMel} alt='Foto 5 página Pão de Mel' />
             <img className="ft2-paoMel" src={Ft6PaoMel} alt='Foto 6 página Pão de Mel' />
             <img className="ft2-paoMel" src={Ft7PaoMel} alt='Foto 7 página Pão de Mel' />
             <img className="ft2-paoMel" src={Ft8PaoMel} alt='Foto 8 página Pão de Mel' />
           </div>
          <Footer />
        </> 
    )
}

export default paoMel