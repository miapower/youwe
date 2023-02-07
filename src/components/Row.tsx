import { RowProps, YouWeBox } from '../types';
import {Box} from './Box';

export const Row = ({handleAddBox, handleDeleteBox, showBoxes}: RowProps) => {	
	return (
		<div className='row'>
			{showBoxes.map((box: YouWeBox) =>
			<>
			<Box 
				key={box.key ? box.key : box.id}
				id={box.id} 
				color={box.color} 
				headerText={box.header} 
				bodyContent={box.body} 
				handleAddBox={handleAddBox} 
				handleDeleteBox={handleDeleteBox}
			/></>)}
		</div>
	);
};
