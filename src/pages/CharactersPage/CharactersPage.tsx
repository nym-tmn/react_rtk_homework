import { useCallback, useEffect, useMemo, useState, type ChangeEvent } from "react"
import { Button, ContentTitle, CustomImage, CustomnInput, Flex, Modal, Pagination, SectionStyles } from "@components"
import { Character } from "./Character/Character";
import { type CharacterType } from "@types";
import failedImage from '@assets/images/failed_Image.webp';
import loadingImage from '@assets/images/loading.webp';
import { useDebounce } from "@hooks";
import { useAppDispatch, useAppSelector } from "@hooks";
import { fetchCharacters, fetchFiltredCharacters, setCurrentPage, setSearchInputValue } from "@store";

export const CharactersPage = () => {

	const [isOpenModal, setIsOpenModal] = useState(false);
	const [selectedCharacter, setSelectedCharacter] = useState<CharacterType | null>(null);

	const { pages, currentPage, portionCount } = useAppSelector(state => state.pagination);

	const {isLoading, results: characters, searchInputValue, error } = useAppSelector(state => state.characters);

	const dispatch = useAppDispatch();

	const debouncedSearchValue = useDebounce(searchInputValue, 500);

	const handleSetCharacterClick = useCallback((character: CharacterType | null) => {
		setSelectedCharacter(character);
		setIsOpenModal(prev => !prev);
	}, []);

	const charactersList = useMemo(() => {
		if (!characters) return null;
		return characters.map(character =>
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
		if (debouncedSearchValue) {
			dispatch(fetchFiltredCharacters(currentPage, debouncedSearchValue))
		} else {
			dispatch(fetchCharacters(currentPage))
		}
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