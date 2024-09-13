import React from "react";
import Slider from "react-slick";
import Planeta1 from "../images/Untitled-1-01.png";
import Planeta2 from "../images/Untitled-1-02.png";
import Planeta3 from "../images/Untitled-1-03.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/planetStyles.css";

function PlanetComponent({ onPlanetSelect }) {
  // Lista de planetas con sus respectivas rutas de imagen
  const planets = [
    { id: 0, name: "Earth", img: Planeta1 },
    { id: 2, name: "Mars", img: Planeta2 },
    { id: 1, name: "Europe", img: Planeta3 },
  ];

  // Configuración del carrusel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Mostrar 2 slides al mismo tiempo
    centerMode: true, // Centrar el slide principal
    centerPadding: "0", // Sin padding adicional
    slidesToScroll: 1,
    focusOnSelect: true, // Permitir hacer click en los slides laterales para seleccionarlos
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // En pantallas pequeñas solo se muestra 1 slide
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {planets.map((planet) => (
          <div key={planet.id} onClick={() => onPlanetSelect(planet)}>
            <img
              id={planet.id}
              className="planet-img"
              src={planet.img}
              alt={planet.name}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PlanetComponent;
