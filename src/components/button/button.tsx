import React, { FunctionComponent } from 'react';
import './button.scss';
import { Button as BootstrapButton } from 'react-bootstrap';

interface ButtonProps {
	text: string;
	class?: string;
	onClick: () => void;
}

export const Button: FunctionComponent<ButtonProps> = (
	props: ButtonProps,
): JSX.Element => {
	return (
		<BootstrapButton
			type="button"
			className={props.class ?? props.class}
			onClick={props.onClick}>
			<span>{props.text}</span>
		</BootstrapButton>
	);
};
