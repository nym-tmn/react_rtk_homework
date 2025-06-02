import type { EpisodesType, ResponseType } from "@allTypes/api";
import { instance } from "@api";

export const getEpisodes = async (currentPage: number) => {
	const response = await instance.get<ResponseType<EpisodesType>>(`episode?page=${currentPage}`);
	const data = response.data;
	return data;
}