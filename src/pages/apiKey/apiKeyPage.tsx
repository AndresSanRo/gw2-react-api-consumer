import React, { FunctionComponent } from 'react';
import { Input, Button } from '../../components';
const ApiKeyPage: FunctionComponent = (): JSX.Element => {
	return (
		<>
			<h1>API key page</h1>
			<Input label={'API key'} required={true} />
			<Button text={'hey'} onClick={() => {}} />
		</>
	);
};

export default ApiKeyPage;
