import React, { FunctionComponent } from 'react';
import './input.scss';

interface InputProps {
	type?: string;
	placeHolder?: string;
	label?: string;
	required?: boolean;
}

export const Input: FunctionComponent<InputProps> = (
	props: InputProps,
): JSX.Element => {
	return (
		<div className="inputContainer">
			{props.label !== null && (
				<label className={props.required ? 'required' : ''}>
					{props.label}
				</label>
			)}
			<input
				required={props.required}
				type={props.type ? props.type : 'text'}
				placeholder={props.placeHolder ? props.placeHolder : ''}
			/>
		</div>
	);
};
