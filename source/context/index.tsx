import React from 'react';
import { Size } from '../hooks/useResize.js';

export const Context = React.createContext({} as any);

interface IContextProviderProps {
	children: React.ReactNode;
}

export const useAppContext = () => React.useContext(Context);

export const Provider: React.FC<IContextProviderProps> = ({ children }) => {

	const [midiFilesDirectory, setMidiFilesDirectory] = React.useState('./midi_files');
	const [terminalSize, setTerminalSize] = React.useState<Size>({
		width: process.stdout.columns,
		height: process.stdout.rows
	});

	const contextValue: any = {
		midiFilesDirectory,
		setMidiFilesDirectory,
		terminalSize,
		setTerminalSize
	};

	return React.createElement(Context.Provider, {
		value: contextValue
	}, children);
};
