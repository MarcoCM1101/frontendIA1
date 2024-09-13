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
          </ul>
        </nav>
        {/* Sección de Contexto */}
        <div className="context-section" id="context">
          <h2 className="context-title">Contexto</h2>
          <div className="context-content">
            <p>
              Nos encontramos en el año 2912 y tus habilidades en ciencia de
              datos son cruciales para resolver un enigma cósmico. Hemos
              recibido una transmisión desde una distancia de cuatro años luz, y
              la situación no parece nada alentadora.
            </p>
            <p>
              El <span className="context-emphasize">Spaceship Titanic</span>{" "}
              era un transatlántico interestelar que fue lanzado hace un mes.
              Con casi 13,000 pasajeros a bordo, la nave emprendió su viaje
              inaugural, transportando emigrantes desde nuestro sistema solar
              hacia tres exoplanetas recién habitables en órbita alrededor de
              estrellas cercanas.
            </p>
            <p>
              Mientras rodeaba Alpha Centauri, en su camino hacia su primer
              destino—el cálido{" "}
              <span className="context-emphasize">55 Cancri E</span>—el
              Spaceship Titanic, desprevenido, colisionó con una anomalía en el
              espacio-tiempo oculta en una nube de polvo. Tristemente, tuvo un
              destino similar al de su homónimo de hace mil años. Aunque la nave
              permaneció intacta, casi la mitad de los pasajeros fueron
              transportados a una dimensión alternativa.
            </p>
            <p>
              Para ayudar a los equipos de rescate a recuperar a los pasajeros
              perdidos, te encargamos la tarea de predecir qué pasajeros fueron
              transportados por la anomalía, utilizando los registros
              recuperados del sistema dañado de la nave.
            </p>
            <p>¡Ayuda a salvarlos y cambia la historia!</p>
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
