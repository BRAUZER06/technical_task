import React from "react";
import Button from "../../pages/Button/Button";
import Chips from "../../pages/Chips/Chips";
import CountrySlider from "../../pages/CountrySlider/CountrySlider";
import TextInput from "../../pages/TextInput/TextInput";
import styles from "./MainComponent.module.scss";

const MainComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <CountrySlider />
        <div className={styles.content__chips}>
          <Chips
            margin={"0px 8px 0px 0px"}
            backgroundColor={"#fb9155"}
            color="#ffffff"
            text="Пляжи"
          />
          <Chips margin={"0px 8px 0px 0px"} text="Breezzor Pass" />
          <Chips margin={"0px 8px 0px 0px"} text="Впечатления" />
          <Chips margin={"0px 8px 0px 0px"} text="Маршруты" />
        </div>
        <div className={styles.content__textInput}>
          <TextInput width="740" />
        </div>
        <div className={styles.content__buttons}>
          <Button
            margin={"0px 16px 0px 0px"}
            text="На карте"
            backgroundColor="#ffffff"
            color="#000000"
          />
          <Button text="Все пляжи страны" />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
