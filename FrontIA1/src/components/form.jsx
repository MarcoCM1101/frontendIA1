import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  // Configuración del carrusel de cuestionario
  const quizSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    adaptativeWidth: true,
  };

  // Renderiza el carrusel con el cuestionario
  return (
    <div className="quiz-carousel">
      <Slider {...quizSettings}>
        {/* Primera parte del cuestionario */}
        <div className="quiz-section">
          <h3>Cuestionario - Parte 1</h3>
          <form>
            <input type="text" placeholder="Pregunta 1" />
            <input type="text" placeholder="Pregunta 2" />
            <input type="text" placeholder="Pregunta 3" />
            <input type="text" placeholder="Pregunta 4" />
            <input type="text" placeholder="Pregunta 5" />
          </form>
        </div>
      </Slider>
    </div>
  );
}
export default Carousel;
