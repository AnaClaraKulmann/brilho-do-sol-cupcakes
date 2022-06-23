import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../páginas/Home'
import Cupcakes from '../páginas/Cupcakes'
import Bento from '../páginas/Bento'
import PaoMel from '../páginas/PaoMel'
import Donuts from '../páginas/Donuts'
import Biscoitos from '../páginas/Biscoitos'
import Contato from '../páginas/Contato'


const Rota = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/cupcakes' element={<Cupcakes/>}></Route>
                <Route path='/bento-cakes' element={<Bento/>}></Route>
                <Route path='/pao-de-mel' element={<PaoMel/>}></Route>
                <Route path='/donuts' element={<Donuts/>}></Route>
                <Route path='/biscoitos-amanteigados' element={<Biscoitos/>}></Route>
                <Route path='/contato' element={<Contato/>}></Route>
            </Routes>
        </Router>
    )
}

export default Rota