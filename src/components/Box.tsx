import { BoxProps } from "../types";


export const Box = ({color, headerText, bodyContent}: BoxProps) => {
	// Console.log(bgColor, headerText, bodyContent);

	const handleBoxClick = () => {
		alert('box is clicked');
	};

	return (
		<div className='boxContainer' onClick={handleBoxClick}>
			<div className='boxHeader'>{headerText}</div>
			<div className='boxBody'>{bodyContent} {color}</div>
		</div>
	);
};
