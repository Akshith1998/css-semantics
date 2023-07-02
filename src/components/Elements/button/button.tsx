"use client";

import React, { useState } from "react";
import styles from "./button.module.scss";
import Slider from "@/components/rangeSliders/rangeSlider";
import { useAppSelector } from "@/redux/hooks";

const Button = () => {
  const [buttonInput, setButtonInput] = useState("Button");
  const { padding, fontSize, borderRadius } = useAppSelector(
    (state) => state.rangeslideReducer
  );

  const buttonHtml = `<button class="button">Button</button>`;
  const buttonCss = `.button{
    "padding":${padding};
    "font-size":${fontSize};
    "border-radius":${borderRadius};
    "border-style":"none";
  }`;
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            style={{
              padding: padding,
              fontSize: fontSize,
              borderRadius: borderRadius,
            }}
          >
            Button
          </button>
        </div>
        <div className={styles.leftContainerContent}>
          <div className={styles.leftContainerLeftView}>
            <div className={styles.Slider}>
              <div className={styles.SliderText}>Font size</div>
              <Slider sliderName="fontSize" min={10} max={30} default={20} />
            </div>
            <div className={styles.Slider}>
              <div className={styles.SliderText}>Padding</div>
              <Slider sliderName="padding" min={0} max={20} default={10} />
            </div>
            <div className={styles.Slider}>
              <div className={styles.SliderText}>Border radius</div>
              <Slider sliderName="borderRadius" min={0} max={20} default={10} />
            </div>
          </div>
          <div className={styles.leftContainerRightView}>
            <div className={styles.buttonInputDiv}>
              <div className={styles.buttonInputText}>Edit Text</div>
              <input
                value={buttonInput}
                onChange={({ target: { value: radius } }) => {
                  setButtonInput(radius);
                }}
                className={styles.buttonInput}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.buttonHtml}>
          <div className={styles.headerText}>HTML</div>
          <div className={styles.buttonHtmlText}>{buttonHtml}</div>
        </div>
        <div className={styles.buttonCss}>
          <div className={styles.headerText}>CSS</div>
          <div className={styles.buttonCssText}>{buttonCss}</div>
        </div>
      </div>
    </div>
  );
};

export default Button;
