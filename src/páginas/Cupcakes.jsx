import React from "react";
import '../css/cupcakes.css'

import Menu from "../components/Menu";
import Footer from "../components/Footer";

import Ft1Cup from '../fotos-cup/ft1-cup.jpeg'
import Ft2Cup from '../fotos-cup/ft2-cup.jpeg'
import Ft3Cup from '../fotos-cup/ft3-cup.jpeg'
import Ft4Cup from '../fotos-cup/ft4-cup.jpeg'

import Ft5Cup from '../fotos-cup/ft5-cup.jpeg'
import Ft6Cup from '../fotos-cup/ft6-cup.jpeg'
import Ft7Cup from '../fotos-cup/ft7-cup.jpeg'
import Ft8Cup from '../fotos-cup/ft8-cup.jpeg'

import Ft9Cup from '../fotos-cup/ft9-cup.jpeg'
import Ft10Cup from '../fotos-cup/ft10-cup.jpeg'
import Ft11Cup from '../fotos-cup/ft11-cup.jpeg'
import Ft12Cup from '../fotos-cup/ft12-cup.jpeg'


const Cupcakes = () => {
    return(
        <>
          <Menu />
           <h1 className="cupcakes">Cupcakes</h1>
            <h4 className="descricaoCupcakes">A razão de existir a Brilho do Sol! <br></br> <br></br>
            Nossos cupcakes são feitos com uma massa fofinha e deliciosa de baunilha ou chocolate,<br></br>
            recheados com diversos sabores e personalizados da maneira que o cliente desejar.
           </h4>     

           <div>
             <img className="ft1-cup" src={Ft1Cup} alt='Foto 1 página Cupcakes' />
             <img className="ft1-cup" src={Ft2Cup} alt='Foto 2 página Cupcakes' />
             <img className="ft1-cup" src={Ft3Cup} alt='Foto 3 página Cupcakes' />
             <img className="ft1-cup" src={Ft4Cup} alt='Foto 4 página Cupcakes' />
           </div> 

           <div>
             <img className="ft2-cup" src={Ft5Cup} alt='Foto 5 página Cupcakes' />
             <img className="ft2-cup" src={Ft6Cup} alt='Foto 6 página Cupcakes' />
             <img className="ft2-cup" src={Ft7Cup} alt='Foto 7 página Cupcakes' />
             <img className="ft2-cup" src={Ft8Cup} alt='Foto 8 página Cupcakes' />
           </div>    

           <div>
             <p className="descricaoCup">Vendido o cento especialmente para festas!</p>
              <h2 className="subtitulo-cup">Cup Festa</h2>
               <img className="ft3-cup" src={Ft9Cup}  alt='Foto 9 página Cupcakes' />
               <img className="ft3-cup" src={Ft10Cup} alt='Foto 10 página Cupcakes' />
               <img className="ft3-cup" src={Ft11Cup} alt='Foto 11 página Cupcakes' />
               <img className="ft3-cup" src={Ft12Cup} alt='Foto 12 página Cupcakes' />
           </div>
         <Footer />
        </>
    )
}

export default Cupcakes