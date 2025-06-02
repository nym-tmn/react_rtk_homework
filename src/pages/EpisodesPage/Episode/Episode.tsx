import type { EpisodeType } from "@allTypes/api";
import { ContentTitle } from "@components";
import { InfoCardStyles, ParagraphsStyles } from "@components/styles";

export const Episode: React.FC<Pick<EpisodeType, 'name' | 'episode' | 'air_date'>> = ({ name, episode, air_date }) => {
	return (
		<InfoCardStyles>
			<ContentTitle as={'h3'} $color="#333">Name: {name}</ContentTitle>
			<ParagraphsStyles>Episode: {episode}</ParagraphsStyles>
			<ParagraphsStyles>Air date: {air_date}</ParagraphsStyles>
		</InfoCardStyles>
	)
}