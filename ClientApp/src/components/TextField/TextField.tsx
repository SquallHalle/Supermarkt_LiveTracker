import "./TextField.styles.css";
import * as React from "react";
import Form from "react-bootstrap/Form";

export enum TextFieldTypes {
  Password,
  Normal
}

export interface TextFieldProps {
  title?: string;
  Type: TextFieldTypes;
  onChange?: () => void;
  className?: string;
  children?: any;
}

export function TextField(props: TextFieldProps) {
  if (props.Type === TextFieldTypes.Normal) {
    return (
      <Form.Group>
        <Form.Label>{props.title}</Form.Label>
        <Form.Control
          className={[
            props.className,
            "textfield",
            "textfield--" + TextFieldTypes[props.Type].toLowerCase()
          ].join(" ")}
          onChange={props.onChange}
        />
      </Form.Group>
    );
  } else if (props.Type === TextFieldTypes.Password) {
    return (
      <Form.Group>
        <Form.Label>{props.title}</Form.Label>
        <Form.Control
          className={[
            props.className,
            "textfield",
            "textfield--" + TextFieldTypes[props.Type].toLowerCase()
          ].join(" ")}
          type="password"
          onChange={props.onChange}
        />
      </Form.Group>
    );
  } else {
    return (
      <Form.Group>
        <Form.Label>{props.title}</Form.Label>
        <Form.Control
          className={[
            props.className,
            "textfield",
            "textfield--" + TextFieldTypes[props.Type].toLowerCase()
          ].join(" ")}
          onChange={props.onChange}
        />
      </Form.Group>
    );
  }
}

export default TextField;
