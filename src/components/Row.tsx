import { RowProps } from '../types';
import {Box} from './Box';

export const Row = (props: RowProps) => {
	const numberOfBoxes = props.showBoxes.length;
	console.log(props.showBoxes);
	return (
		<div className='row'>
			{props.showBoxes.map((box: any, i: number) => <Box key={i} color={box.color} headerText={box.header} bodyContent={box.body}/>)}
		</div>
	);
};
