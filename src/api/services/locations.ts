import type { LocationsType, ResponseType } from "@allTypes/api";
import { instance } from "@api";

export const getLocations = async (currentPage: number) => {
	const response = await instance.get<ResponseType<LocationsType>>(`location?page=${currentPage}`);
	const data = response.data;
	return data;
}