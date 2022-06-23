import React from "react";
import '../css/bento.css'

import Menu from "../components/Menu";
import Footer from "../components/Footer";

import Ft1Bento from '../fotos-bento/ft1-bento.jpeg'
import Ft2Bento from '../fotos-bento/ft2-bento.jpeg'
import Ft3Bento from '../fotos-bento/ft3-bento.jpeg'
import Ft4Bento from '../fotos-bento/ft4-bento.jpeg'

import Ft5Bento from '../fotos-bento/ft5-bento.jpeg'
import Ft6Bento from '../fotos-bento/ft6-bento.jpeg'
import Ft7Bento from '../fotos-bento/ft7-bento.jpeg'
import Ft8Bento from '../fotos-bento/ft8-bento.jpeg'

const Bento = () => {
    return(
        <>
          <Menu />
              <h1 className="bento">Bentô Cakes</h1>
               <h4 className="descricaoBento">Feito com massa de pão de ló, recheado com doce de leite, 
               brigadeiro ou branquinho e coberto <br></br> com chantily. Possui 10cm de diâmetro, 
               para presentear ou ser degustado individualmente!
              <br></br>
              <br></br>
               A mais saborosa novidade disponível no nosso Cardápio.
               <br></br> Solicite orçamento com a decoração ou "meme" que desejar!</h4>

              <div>
                 <img className="ft1-bento" src={Ft1Bento} alt='Foto 1 página Bentô Cakes' />
                 <img className="ft1-bento" src={Ft2Bento} alt='Foto 2 página Bentô Cakes' />
                 <img className="ft1-bento" src={Ft3Bento} alt='Foto 3 página Bentô Cakes' />
                 <img className="ft1-bento" src={Ft4Bento} alt='Foto 4 página Bentô Cakes' />
              </div>
          
              <div>
                 <img className="ft2-bento" src={Ft5Bento} alt='Foto 5 página Bentô Cakes' />
                 <img className="ft2-bento" src={Ft6Bento} alt='Foto 6 página Bentô Cakes' />
                 <img className="ft2-bento" src={Ft7Bento} alt='Foto 7 página Bentô Cakes' />
                 <img className="ft2-bento" src={Ft8Bento} alt='Foto 8 página Bentô Cakes' />
              </div>
          <Footer />
        </>
    )
}

export default Bento