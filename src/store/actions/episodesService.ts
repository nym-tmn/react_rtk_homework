import { type ResponseType, type EpisodesType } from "@allTypes/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const episodesAPI = createApi({
	reducerPath: 'episodesAPI',
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
	endpoints: (build) => ({
		fetchAllEpisodes: build.query<ResponseType<EpisodesType>, unknown, unknown>({
			query: (currentPage) => ({
				url: `episode?page=${currentPage}`
			})
		})
	})
})