import React from "react";
import styles from "./Button.module.scss";

const Button = ({
  text,
  width,
  height,
  margin,
  padding,
  color,
  backgroundColor,
}) => {
  const stylesButton = {
    "width": width,
    "height": height,
    "color": color,
    "backgroundColor": backgroundColor,
  };
  const stylesContainer = {
    "margin": margin,
    "padding": padding,
  };

  return (
    <div style={stylesContainer} className={styles.container}>
      <button style={stylesButton} className={styles.container__button}>
        {text ? text : "text"}
      </button>
    </div>
  );
};

export default Button;
