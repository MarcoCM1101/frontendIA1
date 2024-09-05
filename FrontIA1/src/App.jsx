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
        <div className="spline-section">
          <div className={`title-overlay`}>
            <h1>SPACE TITANIC</h1>
          </div>

          <spline-viewer url="https://prod.spline.design/Sf2RIM4QpX2PAk2w/scene.splinecode"></spline-viewer>
        </div>
        <div className="new-section">
          <h1>Esta es una nueva sección</h1>
          <p>Aquí puedes agregar más contenido.</p>
          {/* Añadimos más contenido para forzar el scroll */}
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
      </div>
    </>
  );
}

export default App;
