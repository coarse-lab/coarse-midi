import React from "react";
import { useAppContext } from "../context/index.js";

export type Size = {
	width: number;
	height: number;
}

export const useResize = () => {
	const { setTerminalSize } = useAppContext();

	React.useEffect(() => {
		const onResize = () => {
			const size = {
				width: process.stdout.columns,
				height: process.stdout.rows
			};
			setTerminalSize(size);
		};
		process.stdout.on('resize', onResize);
		return () => {
			process.stdout.off('resize', onResize);
		};
	}, []);
}
