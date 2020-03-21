import "./button.styles.css";
import * as React from "react";
import { Link } from "react-router-dom";

export enum ButtonTypes {
  Success,
  Abort,
  Link,
  Confirm
}

export interface ButtonProps {
  Type: ButtonTypes;
  onClick?: () => void;
  className?: string;
  children?: any;
  href?: string;
}

export function Button(props: ButtonProps) {
  if (props.Type === ButtonTypes.Link) {
    return (
      <Link
        to={props.href == null ? "" : props.href}
        className={[
          props.className,
          "button",
          "button--" + ButtonTypes[props.Type].toLowerCase()
        ].join(" ")}
      >
        {props.children}
      </Link>
    );
  } else {
    return (
      <button
        className={[
          props.className,
          "button",
          "button--" + ButtonTypes[props.Type].toLowerCase()
        ].join(" ")}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  }
}

export default Button;
