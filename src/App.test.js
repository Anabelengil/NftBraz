// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NftBraz title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NftBraz/i);
    expect(titleElement).toBeInTheDocument();
});
