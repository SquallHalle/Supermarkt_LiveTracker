import "./StatusSlider.styles.css";
import * as React from "react";

export interface StatusSliderProps {
  placeholder?: string;
  onChange?: (value: number) => void;
  className?: string;
  step: number;
  min: number;
  max: number;
}

export enum StatusSliderValues {
  green,
  yellow,
  red
}

export function StatusSlider(props: StatusSliderProps) {
  let [statusColor, setStatusColor] = React.useState("green");

  const onSliderChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setStatusColor(
      StatusSliderValues[
        Math.round(
          ((parseInt(evt.target.value) - parseInt(evt.target.min)) /
            (parseInt(evt.target.max) - parseInt(evt.target.min))) *
            2
        )
      ]
    );

    props.onChange
      ? props.onChange(parseInt(evt.target.value))
      : console.log(evt.target.value);
  };

  return (
    <input
      className={[
        props.className,
        "statusslider",
        "statusslider--" + statusColor
      ].join(" ")}
      type='range'
      step={props.step}
      min={props.min}
      max={props.max}
      onChange={onSliderChange}
    />
  );
}

export default StatusSlider;
