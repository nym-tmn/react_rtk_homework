import { NavLink } from "react-router"
import { CustomImage } from "@components"
import React from "react";
import { logo } from "@assets/images";

export const Logo = React.memo(() => {

	return (
		<NavLink to="/">
			<CustomImage>
				<img src={logo} alt="Rick and Morty logo" />
			</CustomImage>
		</NavLink>
	)
})