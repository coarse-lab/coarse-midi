import { useFocus, useFocusManager, useInput } from "ink";
import React from "react";

interface ItemProps {
	keyMap: string;
	children: React.ReactNode;
}

export const FocusableItem = ({ keyMap, children }: ItemProps) => {

	const randomId = React.useMemo(() => Math.random().toString().slice(2), []);

	const { focus } = useFocusManager();
	const { isFocused } = useFocus({ id: randomId });

	useInput(input => {
		if (input === keyMap) {
			focus(randomId);
		}
	});

	return (
		React.cloneElement(children as React.ReactElement, {
			backgroundColor: isFocused ? 'green' : undefined,
			color: isFocused ? 'black' : undefined,
			bold: isFocused
		})
	);
}
