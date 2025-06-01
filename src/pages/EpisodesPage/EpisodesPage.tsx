import { useEffect } from "react";
import { ContentTitle, CustomImage, Flex, Pagination, SectionStyles } from "@components";
import { Episode } from "./Episode/Episode";
import failedImage from '@assets/images/failed_Image.webp';
import loadingImage from '@assets/images/loading.webp';
import { useAppDispatch, useAppSelector } from "@hooks";
import { fetchEpisodes } from "@store";

export const EpisodesPage = () => {

	const { pages, currentPage, portionCount } = useAppSelector(state => state.pagination);

	const { isLoading, results: episodes, error } = useAppSelector(state => state.episodes);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchEpisodes(currentPage))
	}, [dispatch, currentPage])

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
			) : error ? (
				<SectionStyles $display="flex">
					<Flex $direction="column" $justify="center" $align="center">
						<ContentTitle as={'h3'} $fontSize="32px">{error}</ContentTitle>
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
								.map(episode =>
									<Episode key={episode.id} name={episode.name} episode={episode.episode} air_date={episode.air_date} />)}
						</Flex>
					</SectionStyles>
					<Pagination
						pages={pages}
						dispatch={dispatch}
						currentPage={currentPage}
						portionCount={portionCount}
					/>
				</>
			)}
		</>
	);
};