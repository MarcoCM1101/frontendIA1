import React, { useState } from "react";
import "./components/PlanetComponent";
import "./App.css";
import PlanetComponent from "./components/PlanetComponent";
import "./components/form";
import Carousel from "./components/form";
import Loader from "./components/Loader"; // Importa el componente del loader

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [isExiting, setIsExiting] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar la aparición del loader

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

  // Función para manejar el clic en el botón "Predecir"
  const handlePredict = () => {
    setIsLoading(true); // Muestra el loader
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
        {/* Context Section */}
        <div className="context-section" id="context">
          <h2 className="context-title">Context</h2>
          <div className="context-content">
            <p>
              Welcome to the year 2912, where your data science skills are
              needed to solve a cosmic mystery. We've received a transmission
              from four lightyears away and things aren't looking good.
            </p>
            <p>
              The <span className="context-emphasize">Spaceship Titanic</span>{" "}
              was an interstellar passenger liner launched a month ago. With
              almost 13,000 passengers on board, the vessel set out on its
              maiden voyage transporting emigrants from our solar system to
              three newly habitable exoplanets orbiting nearby stars.
            </p>
            <p>
              While rounding Alpha Centauri en route to its first
              destination—the torrid{" "}
              <span className="context-emphasize">55 Cancri E</span>—the unwary
              Spaceship Titanic collided with a spacetime anomaly hidden within
              a dust cloud. Sadly, it met a similar fate as its namesake from
              1000 years before. Though the ship stayed intact, almost half of
              the passengers were transported to an alternate dimension!
            </p>
            <p>
              To help rescue crews and retrieve the lost passengers, you are
              challenged to predict which passengers were transported by the
              anomaly using records recovered from the spaceship’s damaged
              computer system.
            </p>
            <p>Help save them and change history!</p>
          </div>
        </div>

        {/* Prediction Section */}
        <div className="new-section" id="travelTo">
          <h1 className="travelTo">Travel To</h1>

          {/* Mostrar el nombre del planeta seleccionado debajo del título */}
          {selectedPlanet && (
            <h2 className="planet-name-title">{selectedPlanet.name}</h2>
          )}

          {/* Mostrar el loader si isLoading es verdadero, de lo contrario mostrar el contenido */}
          {isLoading ? (
            <Loader /> // Mostrar el loader si isLoading es true
          ) : (
            <>
              {/* Mostrar el carrusel o el planeta seleccionado */}
              {!selectedPlanet ? (
                <PlanetComponent onPlanetSelect={handlePlanetSelect} />
              ) : (
                <div
                  className={`selected-planet ${isExiting ? "fade-out" : ""}`}
                >
                  {/* Planeta seleccionado a la izquierda */}
                  <div className="planet-left">
                    <h2 className="planet-name">{selectedPlanet.name}</h2>
                    <img
                      src={selectedPlanet.img}
                      alt={selectedPlanet.name}
                      className="planet-img-selected"
                    />
                  </div>

                  {/* Formulario en el centro */}
                  <div className="quiz-center">
                    <Carousel
                      onPredict={handlePredict}
                      selectedPlanet={selectedPlanet}
                    />{" "}
                    {/* Pasamos la función de predicción */}
                  </div>

                  {/* Botón de cancelar a la derecha */}
                  <div className="cancel-right">
                    <button className="cancel-button" onClick={handleCancel}>
                      Cancelar
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
