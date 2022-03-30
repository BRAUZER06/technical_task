import React from "react";
import styles from "./Chips.module.scss";

const Chips = ({
  text,
  width,
  height,
  margin,
  padding,
  color,
  backgroundColor,

  hoverBgrColor,
  hoverColor,

  activeBgrColor,
  activeColor,

  focusBgtColor,
  focusColor,
}) => {
  const stylesButton = {
    width: width,
    height: height,
    color: color,
    backgroundColor: backgroundColor,
    // ":hover": {
    //   "backgroundColor": hoverBgrColor,
    //   "color": hoverColor,
    // },
    // ":action": { "backgroundColor": activeBgrColor, color: activeColor },
    // ":focus": { "backgroundColor": focusBgtColor, color: focusColor },
  };
  const stylesChips = {
    margin: margin,
    padding: padding,
  };

  return (
    <div style={stylesChips} className={styles.container}>
      <button   style={stylesButton} className={styles.container__button}>
        {text ? text : "text"}
      </button>
    </div>
  );
};

export default Chips;
