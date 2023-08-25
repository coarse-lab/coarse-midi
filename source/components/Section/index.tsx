import { Box, Text as InkText } from 'ink';
import React from 'react';

interface ISectionProps {
	children: React.ReactNode;
	borderStyle?: string;
	borderColor?: string;
	padding?: number;
	margin?: number;
	width?: number;
	height?: number;
	left?: string;
	gap?: number;
	col?: boolean;
	color?: string;
	bold?: boolean;
}

export const Text: React.FC<ISectionProps> = ({ children, color = "green", ...style }) => (
	<InkText {...style as any} color={color}>
		{children}
	</InkText>
);

const Row: React.FC<ISectionProps> = ({ children, borderColor = "green", col, ...style }) => (
	<Box flexDirection={col ? "column" : "row"} {...style as any} borderColor={borderColor}>
		{children}
	</Box>
);

const Column: React.FC<ISectionProps> = ({ children, borderColor = "green", ...style }) => (
	<Row col {...style} borderColor={borderColor}>
		{children}
	</Row>
);

export default {
	Row,
	Column
}
