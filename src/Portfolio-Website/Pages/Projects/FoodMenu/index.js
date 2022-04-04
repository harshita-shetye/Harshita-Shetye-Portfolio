import { Link } from "react-router-dom";

const FoodMenu = () => {
  return (
    <>
      <br />
      <br />
      <section className="section">
        <h4>
          Our restaurant will be opening soon with the most delicious snacks on
          the menu!
        </h4>
        <div className="project-info">
          <Link to="/" className="btn">
            Go back home
          </Link>
        </div>
      </section>
    </>
  );
};

export default FoodMenu;
