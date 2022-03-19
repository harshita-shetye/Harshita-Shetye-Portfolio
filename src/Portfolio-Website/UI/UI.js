import classes from "./UI.module.css";

const UI = () => {
  return (
    <>
      <div className={classes.ui}>
        <label htmlFor="username">Name</label>
        <input type="text" id="username" />
      </div>
    </>
  );
};

export default UI;
