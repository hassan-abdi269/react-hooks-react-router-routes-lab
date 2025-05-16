import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

describe('NavBar Component', () => {
  test('renders navigation links', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    
    expect(screen.getByText(/home/i)).toBeTruthy();
    expect(screen.getByText(/movies/i)).toBeTruthy();
    expect(screen.getByText(/directors/i)).toBeTruthy();
    expect(screen.getByText(/actors/i)).toBeTruthy();
  });

  test('has correct link destinations', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    
    expect(screen.getByText(/home/i).getAttribute('href')).toBe('/');
    expect(screen.getByText(/movies/i).getAttribute('href')).toBe('/movies');
    expect(screen.getByText(/directors/i).getAttribute('href')).toBe('/directors');
    expect(screen.getByText(/actors/i).getAttribute('href')).toBe('/actors');
  });
});