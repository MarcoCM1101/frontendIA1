import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "./Loader"; // Importamos el componente del loader
import axios from "axios";

function Carousel({ selectedPlanet }) {
  const [formData, setFormData] = useState({
    HomePlanet: selectedPlanet.id,
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

  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Estado para mostrar el loader
  const [predict, setPredict] = useState(null); // Estado para almacenar el resultado de la predicción

  const quizSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    adaptiveWidth: true,
    arrows: true,
    nextArrow: <div className="slick-next">&#10095;</div>,
    prevArrow: <div className="slick-prev">&#10094;</div>,
  };

  // Crear un objeto ordenado manualmente
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

  console.log("Datos enviados en orden:", orderedData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    validateForm({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = (data) => {
    const isValid = Object.values(data).every((field) => field !== "");
    setIsFormValid(isValid);
  };

  const handlePredict = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Muestra el loader

    setTimeout(async () => {
      try {
        const response = await axios.post(
          "http://34.193.195.198:8080/predict2", // Asegúrate de que este endpoint esté funcionando
          orderedData
        );
        setPredict(response.data); // Asegúrate de que `response.data.Prediction` sea lo que esperas
        setIsLoading(false); // Ocultar el loader
        console.log("Prediction result:", response.data);
      } catch (error) {
        console.error("Error making prediction:", error);
        setIsLoading(false); // Asegúrate de ocultar el loader en caso de error
      }
    }, 5000); // Simulación de una espera de 5 segundos
  };

  return (
    <div className="quiz-carousel">
      {isLoading ? (
        <Loader /> // Mostrar el loader mientras se espera
      ) : predict ? (
        <div className="prediction-result">
          <h2>{predict.Prediction}</h2>{" "}
          {/* Asegúrate de que Prediction sea el valor correcto */}
        </div>
      ) : (
        <Slider {...quizSettings}>
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
                disabled={!isFormValid}
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
