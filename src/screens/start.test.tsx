import {render, screen} from '@testing-library/react';
import {Start} from './start';

describe('Basic tests for step 1', () => {
	test('Start renders like a charm test', () => {
		render(<Start />);
		const hello = screen.getByText(/youwe/i);
		expect(hello).toBeInTheDocument();
	});
});

/*
* Layout
    ** Should never exceed a width of 1200px

* Container1
    ** Should have a max-width of 1200px
    ** Should be filled with an image of your choice
       as a background

* Container2
    ** Should never exceed a width of 860px
    ** Should have a light gray background

*/

describe('Tests for layout', () => {
	test('Outer layout has className that sets max-width to 1200px', () => {
		render(<Start />);
		const layoutContainer = screen.getByRole('layoutcontainer');
		expect(layoutContainer.className).toBe('layoutcontainer');
	});

	test('Container1 has className that sets a max-width of 1200px and a background-image', () => {
		render(<Start />);
		const layoutContainer = screen.getByRole('container');
		expect(layoutContainer.className).toBe('container');
	});
});
