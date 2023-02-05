import {render, screen} from '@testing-library/react'
import { Start } from './start'

describe('Basic tests for step 1', () => {
    test("Start renders like a charm test", () => {
        render(<Start />);
        const hello = screen.getByText(/youwe/i);
        expect(hello).toBeInTheDocument();
    })
})