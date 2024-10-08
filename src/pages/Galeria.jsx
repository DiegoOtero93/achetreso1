import React, { useState } from 'react';
import '../Styles/Styles.css';

const Galeria = () => {
  const [activeSector, setActiveSector] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const sectores = {
    CanchasConLuces: [
      '/cancha-de-futbol-1.jpg',
      '/campo-de-futbol1.1.jpg',
      '/campo-de-futbol-arco.jpg',
      // Agrega más imágenes si es necesario
    ],
    CanchasSinLuces: [
      '/campos/campo_sin_luces.jpg',
    ],
    Parrillero: [
      '/casa/barbacoa1.jpg',
      '/casa/barbacoa2.jpg',
    ],
    Piscina: [
      '/piscina/piscina.jpg',
    ],
    JuegosParaLosMasChicos: [
      '/juegos/columpios.jpg',
    ]
  };

  const openCarousel = (sector, index) => {
    setActiveImage(sectores[sector]);
    setImageIndex(index);
  };

  const nextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === activeImage.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? activeImage.length - 1 : prevIndex - 1
    );
  };

  const closeCarousel = () => {
    setActiveImage(null);
  };

  return (
    <div className="galeria">
      <h1>Galería</h1>
      <section className="sectores">
        {Object.keys(sectores).map((sector, index) => (
          <div key={index} className="sector">
            <h2 onClick={() => setActiveSector(sector === activeSector ? null : sector)}>
              {sector.replace(/([A-Z])/g, ' $1')}
            </h2>
            {activeSector === sector && (
              <div className="imagenes">
                {sectores[sector].slice(0, 3).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${sector} ${idx + 1}`}
                    onClick={() => openCarousel(sector, idx)}
                  />
                ))}
                {sectores[sector].length > 3 && (
                  <button onClick={() => openCarousel(sector, 0)}>Ver más</button>
                )}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Carrusel Modal */}
      {activeImage && (
        <div className="carousel-overlay">
          <div className="carousel">
            <button className="prev" onClick={prevImage}>❮</button>
            <img src={activeImage[imageIndex]} alt={`Imagen ${imageIndex + 1}`} className="carousel-img" />
            <button className="next" onClick={nextImage}>❯</button>
          </div>
          <button className="close" onClick={closeCarousel}>✕</button>
        </div>
      )}
    </div>
  );
};

export default Galeria;









// import React, { useState, useEffect } from "react"; // Importa React, useState y useEffect desde la biblioteca de React
// import axios from 'axios'; // Importa axios para realizar peticiones HTTP
// import { IoStar } from "react-icons/io5"; // Importa el ícono IoStar de React Icons
// import Carousel from "../components/Carousel"; // Importa el componente Carousel

// function Galeria() {
//   let link = import.meta.env.VITE_API_PRODUCTOS; // Obtiene la URL de la API de productos desde las variables de entorno de Vite

//   const [videojuegos, setVideojuegos] = useState([]); // Estado local para almacenar la lista de videojuegos

//   // useEffect se utiliza para realizar la petición GET cuando el componente se monta
//   useEffect(() => {
//     axios.get(link).then(response => { // Realiza una solicitud GET a la URL de la API de productos
//       setVideojuegos(response.data); // Actualiza el estado de videojuegos con los datos recibidos
//     })
//     .catch(error => {
//       console.error('Error al obtener datos:', error); // Maneja errores en la solicitud GET
//     });
//   }, []); // El segundo argumento del useEffect es un arreglo vacío, lo que significa que se ejecuta solo una vez al montar el componente

//   return (
//     <main>
//       <Carousel /> {/* Renderiza el componente Carousel */}
//       <section className="videojuegos">
//         {videojuegos.map(juego => { // Mapea cada juego en la lista de videojuegos
//           return (
//             <article className="videojuegos__contenedorJuego" key={juego.id}>
//               <h2 className="videojuegos__titulo">{juego.nombre}</h2> {/* Muestra el título del juego */}
//               <p>Genero: {juego.genero}</p> {/* Muestra el género del juego */}
//               <p>Sinopsis: <br />{juego.descripcion}</p> {/* Muestra la sinopsis del juego */}
//               <p>Precio: {juego.precio}$</p> {/* Muestra el precio del juego */}
//               <p>Valoracion: {juego.valoracion}<IoStar /></p> {/* Muestra la valoración del juego junto con el ícono de estrella */}
//             </article>
//           );
//         })}
//       </section>
//     </main>
//   );
// }

// export default Galeria; // Exporta el componente VideoJuegos para su uso en otras partes de la aplicación
