import React from "react";
import Section, { Text } from "../Section/index.js";

export const Header: React.FC = () => {
	return <Section.Row borderStyle="classic" height={3}>
		<Text>~~ Header</Text>
	</Section.Row>
};
