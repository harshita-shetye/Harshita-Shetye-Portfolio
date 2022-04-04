import { menu } from "./FoodMenu";
import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Slider = () => {
  const [item, setItem] = useState(menu);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = item.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, item]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 2000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          Delicious<span>!</span>
        </h2>
      </div>
      <div className="section-center">
        {item.map((food, foodIndex) => {
          const { id, image, alt, title, description, category } = food;

          let position = "nextSlide";
          if (foodIndex === index) {
            position = "activeSlide";
          }
          if (
            foodIndex === index - 1 ||
            (index === 0 && foodIndex === item.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={alt} className="single-food" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Slider;
