import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));

describe('Home page', () => {
    it('renders a heading', () => {
        render(<Home name="John Doe"/>);

        const heading = screen.getByRole('heading', {
            name: /john doe/i,
        });

        expect(heading).toBeInTheDocument();
    });
});