import { useCallback, useEffect, useMemo, useState, type ChangeEvent } from "react"
import { Button, ContentTitle, CustomImage, CustomnInput, Flex, Modal, Pagination } from "@components"
import { SectionStyles } from "@components/styles";
import { Character } from "./Character/Character";
import { useDebounce } from "@hooks";
import { useAppDispatch, useAppSelector } from "@hooks";
import { loadingImage, failedImage } from "@assets/images";
import type { CharacterType } from "@allTypes/api";
import { fetchCharacters } from "@store/actions";
import { setSearchInputValue } from "@store/reducers/charactersSlice";
import { setCurrentPage } from "@store/reducers/paginationSlice";

export const CharactersPage = () => {

	const [isOpenModal, setIsOpenModal] = useState(false);
	const [selectedCharacter, setSelectedCharacter] = useState<CharacterType | null>(null);

	const { currentPage, portionCount } = useAppSelector(state => state.paginationReducer);

	const {
		isLoading,
		results: characters,
		searchInputValue,
		error,
		pages,
	} = useAppSelector(state => state.charactersReducer)

	const dispatch = useAppDispatch();

	const debouncedSearchValue = useDebounce(searchInputValue, 500);

	const handleSetCharacterClick = useCallback((character: CharacterType | null) => {
		setSelectedCharacter(character);
		setIsOpenModal(prev => !prev);
	}, []);

	const charactersList = useMemo(() => {
		if (!characters) return null;
		return characters.map((character: CharacterType) =>
			<Button
				key={character.id}
				$isAnimate={true}
				onClick={() => handleSetCharacterClick(character)}>
				<Character
					name={character.name}
					image={character.image}
				/>
			</Button>
		)
	}, [characters, handleSetCharacterClick])

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		if (currentPage !== 1) {
			dispatch(setCurrentPage(1))
		}
		dispatch(setSearchInputValue(event.target.value))
	}

	useEffect(() => {
		dispatch(fetchCharacters({ currentPage, debouncedSearchValue }))
	}, [dispatch, debouncedSearchValue, currentPage])

	return (
		<>
			<ContentTitle $fontSize="28px" $marginBottom="10px" $maxWidth="200px">
				Characters
			</ContentTitle>
			<CustomnInput $alignSelf="flex-start" $margin="0 0 10px 0">
				<Flex $gap="10px">
					<label htmlFor="searchByName">
						Search by name:
					</label>
					<input
						id="searchByName"
						type="text"
						value={searchInputValue}
						onChange={handleInputChange}
					/>
				</Flex>
			</CustomnInput>

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
						<Flex $justify="center" $wrap="wrap" $gap="20px" $margin="0 0 10px 0">
							{charactersList}
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
			{selectedCharacter && (
				<Modal
					character={selectedCharacter}
					isOpenModal={isOpenModal}
					onClick={() => handleSetCharacterClick(null)}
				/>
			)}
		</>
	);
}