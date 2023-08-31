import React from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
    return(
        <div>
            <nav className='navbar'>
                <ul className='navul'>
                    <li className='navli'>
                        <Link to={"/"}>Subir Video</Link>
                    </li>
                    <li className='navli'>
                        <Link to={"/Categorie"}>Categoria</Link>
                    </li>
                    <li className='navli'>
                        <a href="">Colaboracion</a>
                    </li>
                    <li className='navli'>
                        <a href="">Notificaciones</a>
                    </li>
                    <li className='navli'>
                        <a href="">Perfil</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;