import { SyntheticEvent } from "react";
import { BoxProps } from "../types";

export const Box = ({handleAddBox, handleDeleteBox, headerText, bodyContent, bodyExtra, imgUrl, color, id}: BoxProps) => {
	
	const handleBoxClick : React.MouseEventHandler<HTMLDivElement | HTMLAnchorElement> = (e:SyntheticEvent) => {
		handleAddBox(id);e.preventDefault();
	};

	const handleBoxRemove = (e:SyntheticEvent) => {
		handleDeleteBox(id);
		e.preventDefault();
	};
	
	const picArr = [
		"https://source.unsplash.com/i07ss4dGzIo/128x128", 
		"https://source.unsplash.com/vL4ARRCFyg4/128x128", 
		"https://source.unsplash.com/GZS-IkHZ0nU/128x128",
		"https://source.unsplash.com/Pb1bWTGe46Q/128x128", 
		"https://source.unsplash.com/ZHW3TlhG9sI/128x128", 
		"https://source.unsplash.com/uIlyIl670ww/128x128",
		"https://source.unsplash.com/dmKGx2gvCz4/128x128", 
		"https://source.unsplash.com/g1NR2UZjjws/128x128", 
		"https://source.unsplash.com/GZS-IkHZ0nU/128x128",
		"https://source.unsplash.com/0P8rsSIw_fE/128x128", 
		"https://source.unsplash.com/Yek0cYh0bnY/128x128", 
		"https://source.unsplash.com/sT1sEvYUjwU/128x128",
	];

	return (
		<div className={`boxContainer ${color}`}>
			<div className='boxContent' onClick={handleBoxClick}>
			<div className='boxHeader'>{headerText}</div>
			<div className='boxBody'>{bodyContent}</div>
			<div className='boxExtra'>{bodyExtra}</div>
			{imgUrl ?
			(<img src={imgUrl}/>):
			(<img src={picArr[Math.floor(Math.random()*picArr.length)]}/>)
			}
			</div>
			<button className='boxButton' onClick={handleBoxRemove}>Click to remove this box</button>
		</div>
	);
};
