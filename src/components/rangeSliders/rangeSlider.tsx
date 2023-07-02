"use client";

import React, { useState } from "react";
import styles from "./slider.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  getPadding,
  getBorderRadius,
  getFontSize,
  getFontWeight,
} from "./rangesliderSliceReducer";

const Slider = (props: {
  min: number;
  max: number;
  step: number;
  default: number;
  sliderName: string;
}) => {
  const [value, setValue] = useState(props.default);
  const dispatch = useAppDispatch();
  const handleChange = (radius: number) => {
    setValue(radius);
    if (props.sliderName) {
      if (props.sliderName === "padding") dispatch(getPadding(radius));
      else if (props.sliderName === "borderRadius")
        dispatch(getBorderRadius(radius));
      else if (props.sliderName === "fontSize") dispatch(getFontSize(radius));
      else if (props.sliderName === "fontWeight")
        dispatch(getFontWeight(radius));
    }
  };
  return (
    <div className={styles.container}>
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={value}
        onChange={({ target: { value: radius } }) => {
          handleChange(parseInt(radius));
        }}
        className={styles.rangeSlider}
      />
      <div className={styles.value}>{value}</div>
    </div>
  );
};

export default Slider;
