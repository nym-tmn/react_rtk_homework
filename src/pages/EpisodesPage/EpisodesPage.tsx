import { ContentTitle, CustomImage, Flex, Pagination } from "@components";
import { SectionStyles } from "@components/styles";
import { Episode } from "./Episode/Episode";
import { useAppDispatch, useAppSelector } from "@hooks";
import { loadingImage, failedImage } from "@assets/images";
import type { EpisodeType } from "@allTypes/api";
import { episodesAPI } from "@store/actions";

export const EpisodesPage = () => {

	const { currentPage, portionCount } = useAppSelector(state => state.paginationReducer);

	const { isLoading, data, isError, error } = episodesAPI.useFetchAllEpisodesQuery(currentPage);

	const episodes = data?.results;
	
	const pages = data?.info.pages;
	
	const dispatch = useAppDispatch();

	let errorMessage: string | undefined = '';

	if (isError) {
		if ('status' in error) {
			const serverError = error.data as { error?: string };
			errorMessage = serverError?.error || 'Failed to load episodes.';
		} else {
			errorMessage = error.message;
		}
	}

	return (
		<>
			<ContentTitle $fontSize="28px" $marginBottom="20px" $maxWidth="200px">
				Episodes
			</ContentTitle>

			{isLoading ? (
				<SectionStyles $display="flex">
					<Flex $direction="column" $justify="center" $align="center">
						<ContentTitle as={'h3'} $marginBottom="40px" $fontSize="22px">Loading...</ContentTitle>
						<CustomImage>
							<img src={loadingImage} alt="Loading image" />
						</CustomImage>
					</Flex>
				</SectionStyles>
			) : isError && errorMessage ? (
				<SectionStyles $display="flex">
					<Flex $direction="column" $justify="center" $align="center">
							<ContentTitle as={'h3'} $fontSize="32px">{errorMessage}</ContentTitle>
						<CustomImage>
							<img src={failedImage} alt="Unsuccessful request" />
						</CustomImage>
					</Flex>
				</SectionStyles>
			) : (
				<>
					<SectionStyles>
						<Flex $justify="center" $wrap="wrap" $gap="20px" $margin="0 0 20px 0">
							{episodes && episodes
										.map((episode: EpisodeType) =>
									<Episode key={episode.id} name={episode.name} episode={episode.episode} air_date={episode.air_date} />)}
						</Flex>
					</SectionStyles>
					{pages && <Pagination
						pages={pages}
						dispatch={dispatch}
						currentPage={currentPage}
						portionCount={portionCount}
					/>}
				</>
			)}
		</>
	);
};