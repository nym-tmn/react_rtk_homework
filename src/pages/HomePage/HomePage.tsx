import styled from 'styled-components'
import { ContentTitle, CustomImage, Flex } from '@components'
import { homePageImage } from '@assets/images';

const StyledHomePageContainer = ({ className }: { className?: string }) => {
	return (
		<Flex
			className={className}
			$direction="column"
		$justify="center"
		$align="center"
		>
			<ContentTitle $fontSize='44px' $marginBottom='30px'>Wubba Lubba Dub Dub</ContentTitle>
			<CustomImage>
				<img src={homePageImage} alt="Home page main image" />
			</CustomImage>
		</Flex>
	);
};

const StyledHomePage = styled(StyledHomePageContainer)`
flex: 1 1 auto;
`;

export const HomePage = () => {
	return (
		<StyledHomePage />
	)
}