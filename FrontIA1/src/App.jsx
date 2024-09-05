import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      console.log("Scrolling detected!");
    };

    window.addEventListener("scroll", handleScroll);

    // Limpiar el eventListener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div style={{ height: "200vh", padding: "20px" }}>
        <h1>Scroll down to see the console log</h1>
      </div>
    </>
  );
}

export default App;
