import React, { useState } from "react";

import "./components/PlanetComponent";
import "./App.css";
import PlanetComponent from "./components/PlanetComponent";
import "./components/form";
import Carousel from "./components/form";

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [isExiting, setIsExiting] = useState(false);

  // Función para manejar la selección del planeta
  const handlePlanetSelect = (planet) => {
    setSelectedPlanet(planet); // Almacena el planeta seleccionado
  };

  // Función para cancelar la selección del planeta y regresar al carrusel con animación
  const handleCancel = () => {
    setIsExiting(true); // Inicia la animación de salida
    setTimeout(() => {
      setSelectedPlanet(null); // Reinicia el estado y vuelve al carrusel
      setIsExiting(false); // Reinicia el estado de la animación
    }, 500); // Ajusta el tiempo para que coincida con la duración de la animación
  };

  return (
    <>
      <div className="container">
        {/* Spline Section */}
        <div className="spline-section">
          <div className={`title-overlay`}>
            <h1>SPACESHIP TITANIC</h1>
          </div>
          <spline-viewer url="https://prod.spline.design/Sf2RIM4QpX2PAk2w/scene.splinecode"></spline-viewer>
        </div>

        {/* Navbar Section */}
        <nav className="navbar">
          <ul>
            <li>
              <a href="#context">Context</a>
            </li>
            <li>
              <a href="#travelTo">Travel To</a>
            </li>
            <li>
              <a href="#conclusion">Conclusion</a>
            </li>
          </ul>
        </nav>

        {/* Prediction Section */}
        <div className="new-section" id="travelTo">
          <h1>Travel To</h1>

          {/* Mostrar el carrusel o el planeta seleccionado */}
          {!selectedPlanet ? (
            <PlanetComponent onPlanetSelect={handlePlanetSelect} />
          ) : (
            <div className={`selected-planet ${isExiting ? "fade-out" : ""}`}>
              {/* Planeta seleccionado a la izquierda */}
              <div className="planet-left">
                <h2 className="planet-tittle">{selectedPlanet.name}</h2>
                <img
                  src={selectedPlanet.img}
                  alt={selectedPlanet.name}
                  className="planet-img-selected"
                />
                <button className="cancel-button" onClick={handleCancel}>
                  Cancelar
                </button>
              </div>
              {/* Carrusel del cuestionario a la derecha */}
              <Carousel />
            </div>
          )}
        </div>

        {/* Conclusion Section */}
        <div className="new-section" id="conclusion">
          <h1>Conclusion</h1>

          <p>
            Esta es la conclusión de la página. Puedes agregar aquí un resumen
            de la información.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
