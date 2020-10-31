import React, { FunctionComponent, useEffect, useState } from 'react';
import { gw2Api } from '../../api';
import { Character, HttpResponse } from '../../model';

const CharactersPage: FunctionComponent = (): JSX.Element => {
	const [characters, setCharacters] = useState<Character[]>([]);

	useEffect(() => {
		const fetchCharacters = async () => {
			await gw2Api.characters
				.getCharacters()
				.then((response: HttpResponse<Character[]>) => {
					if (response.parsedBody) {
						setCharacters(response.parsedBody);
						console.log(characters);
					}
				});
		};
		fetchCharacters();
	}, [characters, setCharacters]);

	return <h1>Characters page</h1>;
};

export default CharactersPage;
