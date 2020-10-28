import React, { FunctionComponent, ChangeEvent } from "react";
import "./input.scss";

interface InputProps {
  type?: string;
  placeHolder?: string;
  label?: string;
  required?: boolean;
  onChangeValue: (value: string) => void;
  value?: string;
}

export const Input: FunctionComponent<InputProps> = (
  props: InputProps
): JSX.Element => {
  return (
    <div className="inputContainer">
      {props.label !== null && (
        <label className={props.required ? "required" : ""}>
          {props.label}
        </label>
      )}
      <input
        required={props.required}
        type={props.type ? props.type : "text"}
        placeholder={props.placeHolder ? props.placeHolder : ""}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          props.onChangeValue(event.currentTarget.value)
        }
        value={props.value}
      />
    </div>
  );
};
