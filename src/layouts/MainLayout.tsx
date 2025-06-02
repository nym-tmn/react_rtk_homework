import { Outlet } from "react-router";
import styled from "styled-components";
import { Flex } from "@components";
import { Nav } from "@layouts/Nav";
import { Footer } from "@layouts/Footer";
import { Header } from "@layouts/Header";

const StyledMainContentContainer = ({ className }: { className?: string }) => {
	return (
		<Flex
			as={'main'}
			className={className}
			$direction="column"
			$align="center"
		>
			<Outlet />
		</Flex>
	);
};

const StyledMainContent = styled(StyledMainContentContainer)`
  flex: 1 1 auto;
	margin: 0 20px;
`;

export const MainLayout = () => {
	return (
		<>
			<Header />
			<Nav />
			<StyledMainContent />
			<Footer />
		</>
	)
}