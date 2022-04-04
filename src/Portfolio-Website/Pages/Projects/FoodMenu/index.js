import { Link } from "react-router-dom";
import Slider from "./slider";
import FoodItems from "./FoodItems";

const FoodMenu = () => {
  return (
    <>
      <br />
      <br />
      <section className="section">
        <Slider />
        <FoodItems />

        {/* <h4>
          Our restaurant will be opening soon with the most delicious snacks on
          the menu!
        </h4> */}
        <div className="project-info">
          <Link to="/Projects" className="btn">
            Go back to Projects
          </Link>
        </div>
      </section>
    </>
  );
};

export default FoodMenu;
