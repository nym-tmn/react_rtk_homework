import { useEffect } from "react";
import { LocationItem } from "./Location/LocationItem";
import { ContentTitle, CustomImage, Flex, Pagination, SectionStyles } from "@components";
import failedImage from '@assets/images/failed_Image.webp';
import loadingImage from '@assets/images/loading.webp';
import { useAppDispatch, useAppSelector } from "@hooks";
import { fetchLocatoins } from "@store";

export const LocationsPage = () => {

	const { pages, currentPage, portionCount } = useAppSelector(state => state.pagination)

	const { isLoading, results: locations, error } = useAppSelector(state => state.locations);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchLocatoins(currentPage));
	}, [dispatch, currentPage])

	return (
		<>
			<ContentTitle $fontSize="28px" $marginBottom="20px" $maxWidth="200px">
				Locations
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
							{locations && locations
								.map(location =>
									<LocationItem
										key={location.id}
										name={location.name}
										dimension={location.dimension}
										type={location.type} />)}
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