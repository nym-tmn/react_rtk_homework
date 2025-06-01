import { useEffect, useMemo } from "react";
import { Button, Flex } from "@components"
import { type PaginationProps } from "@types";
import React from "react";
import { setCurrentPage, setPortionCount } from "@store";

export const Pagination: React.FC<PaginationProps> = React.memo(({
	pages,
	dispatch,
	currentPage,
	portionCount,
}) => {

	const { pagesCount, totalPortion, prevPagesPortion, nextPagesPortion } = useMemo(() => {
		const pagesCount: Array<number> = [];
		if (pages) {
			for (let i = 1; i <= pages; i++) {
				pagesCount.push(i);
			}
		}

		const pagesPortion = 5;
		const totalPortion = Math.ceil(pages / pagesPortion);
		const prevPagesPortion = (portionCount * pagesPortion) - pagesPortion + 1;
		const nextPagesPortion = portionCount * pagesPortion;

		return { pagesCount, totalPortion, prevPagesPortion, nextPagesPortion };
	}, [pages, portionCount]);

	useEffect(() => {
		if (currentPage === 1) {
			dispatch(setPortionCount(1))
		}
	}, [currentPage, dispatch])

	return (
		<Flex as={'nav'} $margin="0 0 18px 0" $gap="5px">
			{pages > 0 &&
				<>
					{portionCount > 1 &&
						<>
							<Button
								$maxWidth="40px"
								prefix="<<"
								onClick={() => dispatch(setPortionCount(1))}></Button>
							<Button
								$maxWidth="40px"
								prefix="<"
								onClick={() => dispatch(setPortionCount(portionCount - 1))}></Button>
						</>}
					<>
						{pagesCount.filter(page => prevPagesPortion <= page && page <= nextPagesPortion)
							.map(page => <Button
								key={page}
								$isActive={currentPage === page}
								onClick={() => dispatch(setCurrentPage(page))}
								$maxWidth="40px"
							>
								{page}
							</Button>)}
					</>
					{portionCount < totalPortion &&
						<>
							<Button
								$maxWidth="40px"
								prefix=">"
								onClick={() => dispatch(setPortionCount(portionCount + 1))}></Button>
							<Button
								$maxWidth="40px"
								prefix=">>"
								onClick={() => dispatch(setPortionCount(totalPortion))}></Button>
						</>}
				</>}
		</Flex>
	)
})