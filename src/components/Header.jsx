import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UsuarioContext'; 

function Header() {
    const { usuario, logout, autenticado, esAdmin } = useUser(); 

    return (
        <header className='header'>
            <img src="logoVideoclub2.png" alt="logo de videoclub" className='header__imagen' />
            <nav className='header__nav'>
                <ul className="header__lista">
                    <li className="header__elementoLista"><Link to={'/'} className='header__link'>Inicio</Link></li>
                    <li className="header__elementoLista"><Link to={'/quienes'} className='header__link'>Quienes Somos</Link></li>
                    <li className="header__elementoLista"><Link to={'/galeria'} className='header__link'>Galeria</Link></li>
                    <li className="header__elementoLista"><Link to={'/reservas'} className='header__link'>Reservas</Link></li>
                    <li className="header__elementoLista"><Link to={'/torneos'} className='header__link'>Torneos</Link></li>


                </ul>
                
            </nav>
        </header>
    );
}

export default Header;
