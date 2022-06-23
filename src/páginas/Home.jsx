import React from "react"; 
import '../css/home.css'

import Menu from "../components/Menu";
import Footer from '../components/Footer'

import Ft10anos from '../foto-home/ft10anos.png'
import Ft1Home from '../foto-home/ft1-home.jpeg'
import Ft2Home from '../foto-home/ft2-home.jpeg'

import Ft3Home from '../foto-home/ft3-home.jpeg'
import Ft4Home from '../foto-home/ft4-home.jpeg'
import Ft5Home from '../foto-home/ft5-home.jpeg'
import Ft6Home from '../foto-home/ft6-home.jpeg'


const Home = () => {
    return(
        <>
         <Menu />
             <h4 className="subtituloHome">Origem</h4>
              <h1 className="home">Brilho do Sol</h1>
              <div className="linha1"></div>
               <img className="ft10anos" src={Ft10anos} alt='Foto 10 anos Brilho do Sol' />

                <p className="descricao1Home">Tudo começou em 2012 quando a proprietária da 
                Brilho do Sol <br></br> resolveu comemorar seus 35 anos com 35 bolinhos ao invés de um bolo só...</p>
                <img className="ft1home" src={Ft1Home} alt='Foto 1 página Home' />
                <p className="descricaoFt1">Andréia Kulmann. <br></br> Dona e proprietária da Brilho do Sol.</p>
               
                <p className="descricao2Home">Surgiu então a "Bolinhos personalizados e cheios 
                de brilhos", <br></br>que vendia para pessoas próximas e conhecidos.</p>
                <img className="ft2home" src={Ft2Home} alt='Foto 2 página Home' />
                <p className="descricaoFt2"> 1º Cupcake da Brilho do Sol.</p>
               
              <div className="linha2"></div>
                <p className="descricao3Home">O nome Brilho do Sol veio em 2013, e assim foi se
                expandindo a loja, que mesmo online alcançou <br></br> e vem alcançando cada vez mais novos públicos
                e até de outras cidades. Este ano, em Junho, completa-se 10 anos de Brilho do Sol!</p>
                 <img className="ft3home" src={Ft3Home} alt='Foto 3 página Home' />
                 <img className="ft3home" src={Ft4Home} alt='Foto 4 página Home' />
                 <img className="ft3home" src={Ft5Home} alt='Foto 5 página Home' />
                 <img className="ft3home" src={Ft6Home} alt='Foto 6 página Home' />
                <p className="descricaoFinal"> <strong>"Levando doces e muitos brilhos para a vida dos 
                nossos amigos e clientes..."</strong></p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
         <Footer />
        </>
    )
}

export default Home