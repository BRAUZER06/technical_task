import React from "react";
import styles from "./TextInput.module.scss";
import Vector from "../../img/Vector.svg";

const TextInput = ({ placeholder, width, height, margin, padding}) => {
  const stylesContainer = {
    "width": width,
    "height": height,
    "margin": margin,
    "padding": padding,
    
  };
  
  
  return (
    <div style={stylesContainer} className={styles.container}>
      <div className={styles.container__div}>
        <input
          className={styles.container__div_input}
          type="text"
          placeholder={
            placeholder
              ? placeholder
              : "Поиск по стране, региону, городу,название пляжа"
          }
        />
      </div>
      <div className={styles.container__div_img}>
        <img src={Vector} alt="Фото" />
      </div>
    </div>
  );
};

export default TextInput;
