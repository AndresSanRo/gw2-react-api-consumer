import { Character } from '../../model';
import { get, baseUrl } from '../fetchWrapper';

const charactersUrl: string = `${baseUrl}/characters`;

export const getCharactersNames = () => {
	return get<string[]>(charactersUrl);
};

export const getCharacters = () => {
	return get<Character[]>(`${charactersUrl}?ids=all`);
};
