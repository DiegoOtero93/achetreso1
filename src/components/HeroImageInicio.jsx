import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeroImageInicio() {
  const navigate = useNavigate();

  return (
    <section className='heroImage'>
      <div className="heroImage__contenedorTexto">
        <h1 className="heroImage__texto">Donde el fútbol es más que un juego</h1>
        <button className="explorar-boton" onClick={() => navigate('/galeria')}>
          Explora Nuestros Campos
        </button>
      </div>
    </section>
  );
}

export default HeroImageInicio;