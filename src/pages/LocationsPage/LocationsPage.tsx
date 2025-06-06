import { useEffect } from "react";
import { LocationItem } from "./Location/LocationItem";
import { ContentTitle, CustomImage, Flex, Pagination } from "@components";
import { SectionStyles } from "@components/styles";
import { useAppDispatch, useAppSelector } from "@hooks";
import { loadingImage, failedImage } from "@assets/images";
import type { LocationType } from "@allTypes/api";
import { fetchLocations } from "@store/actions";

export const LocationsPage = () => {

	const { currentPage, portionCount } = useAppSelector(state => state.paginationReducer)

	const { isLoading, results: locations, error, pages } = useAppSelector(state => state.locationsReducer);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchLocations(currentPage));
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
								.map((location: LocationType) =>
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