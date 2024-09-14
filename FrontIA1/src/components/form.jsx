import React, { useState } from "react";
import Slider from "react-slick"; // Librería para el carrusel
import "slick-carousel/slick/slick.css"; // Estilos del carrusel
import "slick-carousel/slick/slick-theme.css"; // Tema del carrusel
import Loader from "./Loader"; // Importamos el componente del loader
import axios from "axios"; // Importamos Axios para hacer solicitudes HTTP

function Carousel({ selectedPlanet }) {
  // Definimos el estado inicial del formulario con useState
  const [formData, setFormData] = useState({
    HomePlanet: selectedPlanet.id, // Recibe el id del planeta seleccionado
    CryoSleep: false,
    Destination: "",
    Age: "",
    VIP: false,
    RoomService: "",
    FoodCourt: "",
    ShoppingMall: "",
    Spa: "",
    VRDeck: "",
    Zona: "",
    Spent: 0,
    Side: "",
  });

  // Estado para validar si el formulario es válido
  const [isFormValid, setIsFormValid] = useState(false);
  // Estado para mostrar el loader mientras se hace la predicción
  const [isLoading, setIsLoading] = useState(false);
  // Estado para almacenar el resultado de la predicción
  const [predict, setPredict] = useState(null);

  // Configuración del slider (carrusel)
  const quizSettings = {
    dots: true, // Mostrar puntos de navegación
    infinite: false, // No hacer el carrusel infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Mostrar una diapositiva a la vez
    slidesToScroll: 1, // Desplazar una diapositiva a la vez
    adaptiveHeight: true, // Ajustar la altura de acuerdo con el contenido
    adaptiveWidth: true, // Ajustar el ancho si es necesario
    arrows: true, // Mostrar flechas de navegación
    nextArrow: <div className="slick-next">&#10095;</div>, // Flecha derecha
    prevArrow: <div className="slick-prev">&#10094;</div>, // Flecha izquierda
  };

  // Crear un objeto ordenado manualmente para enviarlo al backend
  const orderedData = {
    HomePlanet: formData.HomePlanet,
    CryoSleep: formData.CryoSleep,
    Destination: formData.Destination,
    Age: formData.Age,
    VIP: formData.VIP,
    RoomService: parseFloat(formData.RoomService) || 0, // Convertir a número
    FoodCourt: parseFloat(formData.FoodCourt) || 0, // Convertir a número
    ShoppingMall: parseFloat(formData.ShoppingMall) || 0, // Convertir a número
    Spa: parseFloat(formData.Spa) || 0, // Convertir a número
    VRDeck: parseFloat(formData.VRDeck) || 0, // Convertir a número
    Spent:
      (parseFloat(formData.RoomService) || 0) +
      (parseFloat(formData.FoodCourt) || 0) +
      (parseFloat(formData.ShoppingMall) || 0) +
      (parseFloat(formData.Spa) || 0) +
      (parseFloat(formData.VRDeck) || 0), // Sumar los valores convertidos a números
    Zona: formData.Zona,
    Side: formData.Side,
  };

  // Manejador para el cambio en el formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target; // Desestructuramos el evento
    setFormData((prevData) => ({
      ...prevData, // Mantenemos los valores previos
      [name]: type === "checkbox" ? checked : value, // Actualizamos el campo correspondiente
    }));
    validateForm({
      ...formData,
      [name]: type === "checkbox" ? checked : value, // Validamos el formulario con los nuevos valores
    });
  };

  // Función para validar el formulario, revisando que no haya campos vacíos
  const validateForm = (data) => {
    const isValid = Object.values(data).every((field) => field !== ""); // Verifica si todos los campos tienen valor
    setIsFormValid(isValid); // Actualiza el estado de la validez del formulario
  };

  // Función que maneja el envío de la predicción
  const handlePredict = async (e) => {
    e.preventDefault(); // Prevenimos el comportamiento por defecto del botón
    setIsLoading(true); // Muestra el loader

    // Simulamos una espera de 5 segundos antes de hacer la solicitud
    setTimeout(async () => {
      try {
        // Hacemos la solicitud al backend
        const response = await axios.post(
          "http://34.193.195.198:8080/predict2", // Asegúrate de que este endpoint esté funcionando
          orderedData
        );
        setPredict(response.data); // Guardamos el resultado de la predicción
        setIsLoading(false); // Ocultamos el loader
        console.log("Prediction result:", response.data); // Mostramos el resultado en consola
      } catch (error) {
        console.error("Error making prediction:", error); // Mostramos el error si falla la solicitud
        setIsLoading(false); // Ocultamos el loader en caso de error
      }
    }, 5000); // Esperamos 5 segundos antes de enviar la solicitud
  };

  // Función para obtener la clase basada en el resultado de la predicción
  const getPredictionClass = () => {
    if (predict?.Prediction === "Se ha transportado") {
      return "prediction-success"; // Clase verde si el resultado es positivo
    } else if (predict?.Prediction === "No se ha transportado") {
      return "prediction-failure"; // Clase roja si el resultado es negativo
    } else {
      return ""; // Sin clase adicional si no hay predicción
    }
  };

  return (
    <div className="quiz-carousel">
      {isLoading ? (
        <Loader /> // Mostrar el loader mientras se espera la predicción
      ) : predict ? (
        <div className={`prediction-result ${getPredictionClass()}`}>
          <h2>{predict.Prediction}</h2>{" "}
          {/* Mostramos el resultado de la predicción */}
        </div>
      ) : (
        <Slider {...quizSettings}>
          {" "}
          {/* Slider para navegar entre las partes del formulario */}
          {/* Primera parte del formulario */}
          <div className="quiz-section">
            <h3>Formulario - Parte 1</h3>
            <form className="form-section">
              <div className="form-group">
                <label>CryoSleep</label>
                <input
                  type="checkbox"
                  name="CryoSleep"
                  checked={formData.CryoSleep}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Destination</label>
                <select
                  name="Destination"
                  value={formData.Destination}
                  onChange={handleChange}
                >
                  <option value="">Select Destination</option>
                  <option value="2">TRAPPIST-1e</option>
                  <option value="1">PSO J318.5-22</option>
                  <option value="0">55 Cancri e</option>
                </select>
              </div>

              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  name="Age"
                  placeholder="Age"
                  value={formData.Age}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>VIP</label>
                <input
                  type="checkbox"
                  name="VIP"
                  checked={formData.VIP}
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
          {/* Segunda parte del formulario */}
          <div className="quiz-section">
            <h3>Formulario - Parte 2</h3>
            <form className="form-section">
              <div className="form-group">
                <label>Room Service</label>
                <input
                  type="number"
                  name="RoomService"
                  placeholder="Room Service"
                  value={formData.RoomService}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Food Court</label>
                <input
                  type="number"
                  name="FoodCourt"
                  placeholder="Food Court"
                  value={formData.FoodCourt}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Shopping Mall</label>
                <input
                  type="number"
                  name="ShoppingMall"
                  placeholder="Shopping Mall"
                  value={formData.ShoppingMall}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Spa</label>
                <input
                  type="number"
                  name="Spa"
                  placeholder="Spa"
                  value={formData.Spa}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>VR Deck</label>
                <input
                  type="number"
                  name="VRDeck"
                  placeholder="VR Deck"
                  value={formData.VRDeck}
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
          {/* Tercera parte del formulario */}
          <div className="quiz-section">
            <h3>Formulario - Parte 3</h3>
            <form className="form-section">
              <div className="form-group">
                <label>Zona</label>
                <select
                  name="Zona"
                  value={formData.Zona}
                  onChange={handleChange}
                >
                  <option value="">Select Zona</option>
                  <option value="0">G</option>
                  <option value="1">F</option>
                  <option value="2">E</option>
                  <option value="3">D</option>
                  <option value="4">B</option>
                  <option value="5">A</option>
                  <option value="6">C</option>
                  <option value="7">T</option>
                </select>
              </div>

              <div className="form-group">
                <label>Side</label>
                <select
                  name="Side"
                  value={formData.Side}
                  onChange={handleChange}
                >
                  <option value="">Select Side</option>
                  <option value="0">P</option>
                  <option value="1">S</option>
                </select>
              </div>

              {/* Botón Predecir */}
              <button
                className="predict-button"
                onClick={handlePredict}
                disabled={!isFormValid} // Desactivar el botón si el formulario no es válido
              >
                Predecir
              </button>
            </form>
          </div>
        </Slider>
      )}
    </div>
  );
}

export default Carousel;
