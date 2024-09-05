import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("Se montó el componente");

    const handleScroll = () => {
      console.log("Se hizo scroll");
    };

    window.addEventListener("scroll", handleScroll);

    // Limpiar el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container">
        {/* Spline Section */}
        <div className="spline-section">
          <div className={`title-overlay`}>
            <h1>SPACE TITANIC</h1>
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
              <a href="#prediction">Prediction</a>
            </li>
            <li>
              <a href="#conclusion">Conclusion</a>
            </li>
          </ul>
        </nav>

        {/* New Section */}
        <div className="new-section" id="context">
          <h1>Esta es una nueva sección</h1>
          <p>Aquí puedes agregar más contenido.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Prediction Section */}
        <div className="new-section" id="prediction">
          <h1>Prediction</h1>
          <p>
            Aquí puedes agregar información relacionada con predicciones y
            análisis.
          </p>
        </div>

        {/* Conclusion Section */}
        <div className="new-section" id="conclusion">
          <h1>Conclusion</h1>
          <p>
            Esta es la conclusión de la página. Puedes agregar aquí un
            resumen de la información.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
