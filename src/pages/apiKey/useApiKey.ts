import { useState } from 'react';
import { utils } from '../../common';

export const useApiKey = (): {
	apiKey: string;
	setApiKey: (value: string) => void;
	saveApiKey: () => void;
} => {
	const [apiKey, setApiKey] = useState<string>(utils.getApiKey());

	const saveApiKey = () => {
		utils.setApiKey(apiKey);
	};
	return { apiKey, setApiKey, saveApiKey };
};
