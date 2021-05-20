/* eslint-disable jsx-a11y/alt-text */

import './styles.css'

import logoJussi from './assets/logoJussi.svg';
import search from './assets/search.svg';
import cart from './assets/cart.svg'

export default function Header() {
  return (
    <nav className="nav-bar">
      <div className="menu">
        <img src={logoJussi} alt="Logo Jussi" />
        <strong>Nossas Soluções</strong>
        <strong>Conheça a Jüssi</strong>
      </div>

      <div className="search-login-cart">
      
        <div className="box"> 
          <input className="search" type="text" placeholder="Buscar" />
          <button id="submit" type="button"> 
              <img id="botao"src={search} alt="" />
          </button>
        </div>
            <strong>Login</strong>
            <img id="cart" src={cart} alt="" />
      </div>

    </nav>

  )
}