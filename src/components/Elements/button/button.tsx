"use client";

import React, { useState } from "react";
import styles from "./button.module.scss";
import Slider from "@/components/rangeSliders/rangeSlider";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { getButtonText } from "./buttonSliceReducer";

const Button = () => {
  const { padding, fontSize, borderRadius, fontWeight } = useAppSelector(
    (state) => state.rangeslideReducer
  );
  const { buttonText } = useAppSelector((state) => state.buttonSliceReducer);
  const dispatch = useAppDispatch();

  const handleButtonInput = (radius: string) => {
    console.log(radius, buttonText);
    dispatch(getButtonText(radius));
  };

  const buttonHtml = `<button class="button">Button</button>`;
  const buttonCss = `.button{
    padding: ${padding}px;
    font-size: ${fontSize}px;
    border-radius: ${borderRadius}px;
    border-style: none;
    cursor: pointer;
    font-weight: ${fontWeight};
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
              fontWeight: fontWeight,
            }}
          >
            {buttonText}
          </button>
        </div>
        <div className={styles.leftContainerContent}>
          <div className={styles.leftContainerLeftView}>
            <div className={styles.Slider}>
              <div className={styles.SliderText}>Font size</div>
              <Slider
                sliderName="fontSize"
                min={10}
                max={30}
                step={1}
                default={20}
              />
            </div>
            <div className={styles.Slider}>
              <div className={styles.SliderText}>Padding</div>
              <Slider
                sliderName="padding"
                min={0}
                max={20}
                step={1}
                default={10}
              />
            </div>
            <div className={styles.Slider}>
              <div className={styles.SliderText}>Border radius</div>
              <Slider
                sliderName="borderRadius"
                min={0}
                max={20}
                step={1}
                default={10}
              />
            </div>
          </div>
          <div className={styles.leftContainerRightView}>
            <div className={styles.buttonInputDiv}>
              <div className={styles.buttonInputText}>Edit Text</div>
              <input
                value={buttonText}
                onChange={({ target: { value: radius } }) => {
                  handleButtonInput(radius);
                }}
                className={styles.buttonInput}
              />
            </div>
            <div className={styles.Slider}>
              <div className={styles.SliderText}>Font weight</div>
              <Slider
                sliderName="fontWeight"
                min={100}
                max={900}
                step={100}
                default={300}
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
