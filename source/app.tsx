import React from 'react';
import { useAppContext } from './context/index.js';
import { FilesList } from './components/FilesList/index.js';
import Section, { Text } from './components/Section/index.js';
import { useResize } from './hooks/useResize.js';
import { Header } from './components/Header/index.js';


export default function App() {

	const { midiFilesDirectory, terminalSize } = useAppContext();

	useResize();

	const { width, height } = terminalSize;

	return (
		<Section.Column borderStyle="single" width={width} height={height * 0.6}>
			<Header />
			<Section.Row >
				<FilesList path={midiFilesDirectory} />
				<Preview />
			</Section.Row>
			<Footer />
		</Section.Column>
	);
}


const Preview = () => {
	return (
		<Section.Column left="|">
			<Text color="red" bold>Details</Text>
			<Text color="red">This is details</Text>
			<Text color="red">More...</Text>
		</Section.Column>
	);
}

const Footer = () => {
	const { terminalSize } = useAppContext();
	const { height } = terminalSize;
	return (
		<Section.Row borderStyle="single" height={Math.floor(height / 4)} borderColor="blue">
			<Text color="blue">Footer</Text>
		</Section.Row>
	);
}
