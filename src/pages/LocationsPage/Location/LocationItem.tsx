import type { LocationType } from "@allTypes/api";
import { ContentTitle } from "@components";
import { InfoCardStyles, ParagraphsStyles } from "@components/styles";

export const LocationItem: React.FC<Pick<LocationType, 'name' | 'dimension' | 'type'>> = ({ name, dimension, type }) => {
	return (
		<InfoCardStyles>
			<ContentTitle as={'h3'} $color="#333">Name: {name}</ContentTitle>
			<ParagraphsStyles>Dimension: {dimension}</ParagraphsStyles>
			<ParagraphsStyles>Type: {type}</ParagraphsStyles>
		</InfoCardStyles>
	)
}