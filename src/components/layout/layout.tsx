import React, { FunctionComponent } from 'react';
import { Container } from 'react-bootstrap';

export const Layout: FunctionComponent = (props): JSX.Element => {
	return <Container>{props.children}</Container>;
};
