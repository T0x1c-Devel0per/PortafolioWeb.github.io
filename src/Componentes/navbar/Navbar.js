import React from 'react';
import './Navbar.css';
const Navbar = ({isScrolling}) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left : 0, behavior: "smooth"}); //Funcion al darle click a la navbar nos llevara al inicio
  }

  return (
    <nav className={`navbar ${isScrolling > 20 ? 'scrolling' : null}`}> 
        <div className='navbar-logo' onClick={toTheTop}>Juan Sanchez</div> 
    </nav>
  )
}

export default Navbar