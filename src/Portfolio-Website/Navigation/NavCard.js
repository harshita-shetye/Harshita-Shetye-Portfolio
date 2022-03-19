import Links from "./Links";
import Home from "../Pages/Home/Home.js";
import CV from "../Pages/CV/CV.js";
import Hobbies from "../Pages/Hobbies/Hobbies.js";
import Projects from "../Pages/Projects/Projects.js";
import classes from "./NavCard.module.css";

const NavCard = () => {
  return (
    <>
      <div className={classes.nav}>
        <Links>
          <Home />
          <CV />
          <Projects />
          <Hobbies />
        </Links>
      </div>
    </>
  );
};

export default NavCard;
