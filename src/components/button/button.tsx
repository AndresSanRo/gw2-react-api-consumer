import React, { FunctionComponent } from "react";

interface ButtonProps {
    text: string,
    class: string,
    clickHandler: () => void
}

export const Button: FunctionComponent<ButtonProps> = (props: ButtonProps): JSX.Element => {
    return (
        <button type="button" className={props.class} onClick={props.clickHandler} >
            <span>{props.text}</span>
        </button>
    );
}
