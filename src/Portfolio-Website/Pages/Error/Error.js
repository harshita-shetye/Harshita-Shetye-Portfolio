import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section">
      <h2>Oops!</h2>
      <p>Looks like you lost your way.</p>
      <Link to="/">Go back home</Link>
    </section>
  );
};
export default Error;
