import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Location = () => {
  const [showInfo, setShowInfo] = useState(false);
  const location = "We are located in Mumbai.";

  return (
    <>
      <section className="location">
        <div className="underline"></div>
      </section>
      <section className="location">
        <h2>Visit our restaurant</h2>
      </section>
      <section className="more">
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </section>
      <section className="more">{showInfo && <p>{location}</p>}</section>
    </>
  );
};

export default Location;
