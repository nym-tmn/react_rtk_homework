import type { CharactersType, ResponseType } from "@allTypes/api";
import { instance } from "@api";

export const getCharacters = async (currentPage: number) => {
	const response = await instance.get<ResponseType<CharactersType>>(`character/?page=${currentPage}`);
	const data = response.data;
	return data;
}

export const getFiltredCharacters = async (currentPage: number, characterName: string) => {
	const response = await instance.get<ResponseType<CharactersType>>(`character/?page=${currentPage}&name=${characterName}`);
	const data = response.data;
	return data;
}