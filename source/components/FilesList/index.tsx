import React from "react";
import { Box, Text, useInput } from "ink";
import dirTree from "directory-tree";
import Section from "../Section/index.js";
import { useAppContext } from "../../context/index.js";

export const FilesList = ({ path }: { path: string }) => {

	const [filesList, setFilesList] = React.useState<any>([]);
	const [indices, setIndices] = React.useState<number[]>([0, 4]);
	// setIndices([0, 3]);
	const [selectIndex, setSelectIndex] = React.useState<number>(0);

	// console.log(selectIndex);

	const { terminalSize } = useAppContext();
	const { height, width } = terminalSize;

	React.useEffect(() => {
		const tree = dirTree(path, undefined);
		const children = tree.children;
		setFilesList(children?.map((dir: any) => {
			return dir.children ? dir.children.map((child: any) => child.path) : dir.path;
		}).flat());
		// setSelectIndex(0);
	}, []);




	useInput((_, key) => {
		if (key.upArrow) {
			if (indices[0]! > 0) {
				setIndices([indices[0]! - 1, indices[1]! - (1)]);
			}
			setSelectIndex(selectIndex - (1 * +(selectIndex > 0)));
		}
		if (key.downArrow) {
			if (indices[1]! < filesList.length) {
				setIndices([indices[0]! + 1, indices[1]! + 1]);
			}
			setSelectIndex(selectIndex + (1 * +(selectIndex < filesList.length - 1)));
		}
	});


	const dirs = filesList?.slice(...indices).map((dir: any) => {

		return <Box key={dir}>
			<Text backgroundColor={
				dir === filesList[selectIndex] ? "green" : undefined
			} color={
				dir === filesList[selectIndex] ? "black" : "green"
			}>
				{dir.split('/').slice(1).join("/")}
			</Text>
		</Box>
	});

	return (
		<Section.Column height={Math.floor(height / 2)} width={Math.floor(width / 2 - 2)}>
			{dirs}
		</Section.Column>
	)
};
