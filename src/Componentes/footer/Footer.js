import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <h1>Juan Sanchez</h1>
        </div>
        <div className='footer-contact'>
            <h3>Contactame</h3>
            <p>Y pongámonos manos a la obra</p>
        </div>
        <div className='footer-sns'>
            <div className='desing-by'>
                Desing By Juan Sanchez
            </div>
            <div className='sns-links'>
                <a href='https://wa.me/573162699802'target='_blank' rel="noreferrer">
                    <i className='fab fa-whatsapp whatsapp'></i>
                </a>
                <a href='https://www.instagram.com/inanimate07/'target='_blank' rel="noreferrer">
                    <i className='fab fa-instagram instagram'></i>
                </a>
                <a href='https://www.facebook.com/Hipst.7/'target='_blank' rel="noreferrer">
                    <i className='fab fa-facebook facebook'></i>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer