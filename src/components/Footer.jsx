import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__rrss'>
        <a href="https://www.facebook.com/tu_perfil" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://wa.me/6662255463" target="_blank" rel="noopener noreferrer">
  <IoLogoWhatsapp />
</a>
        <a href="https://www.tiktok.com/@tu_perfil" target="_blank" rel="noopener noreferrer">
          <AiFillTikTok />
        </a>
        <a href="https://www.instagram.com/hachetreso/" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram />
        </a>
      </div>
      <p>&copy; 2024 Complejo Deportivo ACHETRESO. Todos los derechos reservados</p>
    </footer>
  )
}

export default Footer;
