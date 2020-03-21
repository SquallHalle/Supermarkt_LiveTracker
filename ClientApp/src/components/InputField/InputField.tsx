import "./InputField.styles.css";
import * as React from "react";

export enum InputFieldTypes {
  Password,
  Text
}

export interface InputFieldProps {
  placeholder?: string;
  Type: InputFieldTypes;
  onChange?: (value: string) => void;
  className?: string;
}

export function InputField(props: InputFieldProps) {
  return (
    <input
      className={[props.className, "inputfield"].join(" ")}
      type={InputFieldTypes[props.Type].toLowerCase()}
      placeholder={props.placeholder}
      onChange={evt => {
        props.onChange
          ? props.onChange(evt.target.value)
          : console.log(evt.target.value);
      }}
    />
  );
}

export default InputField;
