import React, { FunctionComponent } from 'react';

interface InputProps {
	type: string;
	placeHolder: string;
	label?: string;
}

export const Input: FunctionComponent<InputProps> = (
	props: InputProps,
): JSX.Element => {
	return (
		<div>
			{props.label !== null && <label>{props.label}</label>}
			<input type={props.type} placeholder={props.placeHolder} />
		</div>
	);
};
