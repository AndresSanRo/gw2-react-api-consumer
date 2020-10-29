const keyGenerator = (): string => {
	return (
		Math.random().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15)
	);
};

const getApiKey = (): string => {
	return localStorage.getItem('gw2ApiKey');
};

const setApiKey = (key: string): void => {
	localStorage.setItem('gw2ApiKey', key);
};

const isNullUndefinedOrDefault = (
	value: Date | string | number | null | undefined,
): boolean => {
	const isNull = value === null;
	const isUndefined = value === undefined;
	if (typeof value === 'string') {
		return isNull || isUndefined || value === '';
	}
	if (typeof value === 'number') {
		return isNull || isUndefined || value === 0;
	}
	return isNull || isUndefined;
};

export const utils = {
	keyGenerator,
	getApiKey,
	setApiKey,
	isNullUndefinedOrDefault,
};
