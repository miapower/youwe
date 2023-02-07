import { BoxProps, YouWeBox } from "../types";

export const Box = ({handleAddBox, handleDeleteBox, headerText, bodyContent, color, id}: BoxProps) => {
	
	const handleBoxClick : React.MouseEventHandler<HTMLDivElement | HTMLAnchorElement> = () => {
		handleAddBox(id);
	};

	const handleBoxRemove = () => {
		handleDeleteBox(id);
	};

	return (
		<div className='boxContainer' onClick={handleBoxClick}>
			<div className='boxHeader'>{headerText}<span onClick={handleBoxRemove}>Klicka för att ta bort</span></div>
			<div className='boxBody'>{bodyContent} {color}</div>
		</div>
	);
};
