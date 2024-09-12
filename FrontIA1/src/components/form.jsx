import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel({ onPredict }) {
  const [formData, setFormData] = useState({
    HomePlanet: "",
    CryoSleep: "",
    Destination: "",
    Age: "",
    VIP: "",
    RoomService: "",
    FoodCourt: "",
    ShoppingMall: "",
    Spa: "",
    VRDeck: "",
    Zona: "",
    Seat: "",
    Side: ""
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
    prevArrow: <div className="slick-prev">&#10094;</div>
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    validateForm({ ...formData, [name]: value });
  };

  const validateForm = (data) => {
    const isValid = Object.values(data).every((field) => field !== "");
    setIsFormValid(isValid);
  };

  return (
    <div className="quiz-carousel">
      <Slider {...quizSettings}>
        <div className="quiz-section">
          <h3>Formulario - Parte 1</h3>
          <form>
            <input type="text" name="HomePlanet" placeholder="Home Planet" value={formData.HomePlanet} onChange={handleChange} />
            <input type="text" name="CryoSleep" placeholder="CryoSleep" value={formData.CryoSleep} onChange={handleChange} />
            <input type="text" name="Destination" placeholder="Destination" value={formData.Destination} onChange={handleChange} />
            <input type="number" name="Age" placeholder="Age" value={formData.Age} onChange={handleChange} />
            <input type="text" name="VIP" placeholder="VIP" value={formData.VIP} onChange={handleChange} />
          </form>
        </div>
        <div className="quiz-section">
          <h3>Formulario - Parte 2</h3>
          <form>
            <input type="number" name="RoomService" placeholder="Room Service" value={formData.RoomService} onChange={handleChange} />
            <input type="number" name="FoodCourt" placeholder="Food Court" value={formData.FoodCourt} onChange={handleChange} />
            <input type="number" name="ShoppingMall" placeholder="Shopping Mall" value={formData.ShoppingMall} onChange={handleChange} />
            <input type="number" name="Spa" placeholder="Spa" value={formData.Spa} onChange={handleChange} />
            <input type="number" name="VRDeck" placeholder="VR Deck" value={formData.VRDeck} onChange={handleChange} />
          </form>
        </div>
        <div className="quiz-section">
          <h3>Formulario - Parte 3</h3>
          <form>
            <input type="text" name="Zona" placeholder="Zona" value={formData.Zona} onChange={handleChange} />
            <input type="text" name="Seat" placeholder="Seat" value={formData.Seat} onChange={handleChange} />
            <input type="text" name="Side" placeholder="Side" value={formData.Side} onChange={handleChange} />
          </form>
        </div>
      </Slider>

      {isFormValid && (
        <button className="predict-button" onClick={onPredict}>
          Predecir
        </button>
      )}
    </div>
  );
}

export default Carousel;
