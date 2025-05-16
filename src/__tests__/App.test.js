import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../components/App';

describe('App Component', () => {
  test('renders the Movies component at /movies', () => {
    render(
      <MemoryRouter initialEntries={['/movies']}>
        <App />
      </MemoryRouter>
    );
    
    const heading = screen.getByRole('heading', { name: /movies page/i });
    expect(heading).toBeTruthy();
    expect(heading.tagName).toBe('H1');
  });

  test('renders the Home component at /', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    
    const heading = screen.getByRole('heading', { name: /home page/i });
    expect(heading).toBeTruthy();
    expect(heading.tagName).toBe('H1');
  });
});