import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//páginas
import Home from './pages/home/home.js';
import Login from './pages/login/login.js';
import Register from './pages/register/register.js';
import Perfil from './pages/perfil/perfil.js';
import Galaxy from './pages/jogos/galaxy/galaxy.js';
import Coin from './pages/jogos/coin/coin.js';
import Mine from  './pages/jogos/mine/mine.js';

export default function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/perfil' element={<Perfil/>} />
                <Route path='/galaxy' element={<Galaxy/>}/>
                <Route path='/coin' element={<Coin/>}/>
                <Route path='/mine' element={<Mine/>}/>
            </Routes>
        </Router>
    )};