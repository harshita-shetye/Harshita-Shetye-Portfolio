//Future Scope: Store in separate Projects file and iterate over each.

import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectsController = ({
  image,
  title,
  updated,
  description,
  link,
  alt,
}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <div className="single-project">
        <img src={image} alt={alt} />
        <footer>
          <div className="project-info">
            <h3>{title}</h3>
            <h4 className="project-date">Last Updated: {updated}</h4>
          </div>
          <p>
            {readMore ? description : `${description.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : " show more"}
            </button>
          </p>
          <p>
            <Link to={link} className="btn">
              Check it out!
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
};

export default ProjectsController;
