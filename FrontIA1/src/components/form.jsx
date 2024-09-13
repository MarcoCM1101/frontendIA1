import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel({ onPredict }) {
  const [formData, setFormData] = useState({
    HomePlanet: "",
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
    Spent: "",
    Side: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    validateForm({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const validateForm = (data) => {
    const isValid = Object.values(data).every((field) => field !== "");
    setIsFormValid(isValid);
  };

  return (
    <div className="quiz-carousel">
      <Slider {...quizSettings}>
        {/* Primera parte del formulario */}
        <div className="quiz-section">
          <h3>Formulario - Parte 1</h3>
          <form className="form-section">
            <div className="form-group">
              <label>Home Planet</label>
              <select
                name="HomePlanet"
                value={formData.HomePlanet}
                onChange={handleChange}
              >
                <option value="">Select Home Planet</option>
                <option value="Europa">Europa</option>
                <option value="Earth">Earth</option>
                <option value="Mars">Mars</option>
              </select>
            </div>

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
                <option value="TRAPPIST-1e">TRAPPIST-1e</option>
                <option value="PSO J318.5-22">PSO J318.5-22</option>
                <option value="55 Cancri e">55 Cancri e</option>
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
              <select name="Zona" value={formData.Zona} onChange={handleChange}>
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
              <select name="Side" value={formData.Side} onChange={handleChange}>
                <option value="">Select Side</option>
                <option value="P">P</option>
                <option value="S">S</option>
              </select>
            </div>

            {/* Botón Predecir */}
            <button
              className="predict-button"
              onClick={onPredict}
              disabled={!isFormValid}
            >
              Predecir
            </button>
          </form>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
