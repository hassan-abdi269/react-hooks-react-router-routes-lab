import { render, screen } from '@testing-library/react';
import Movies from '../components/Movies';
import { movies } from '../data';

describe('Movies Component', () => {
  test('renders "Movies Page" inside of a <h1 />', () => {
    render(<Movies />);
    const heading = screen.getByRole('heading', { name: /movies page/i });
    expect(heading).toBeTruthy();
    expect(heading.tagName).toBe('H1');
  });

  test('renders each movie\'s title and time', () => {
    render(<Movies />);
    movies.forEach(movie => {
      expect(screen.getByText(movie.title)).toBeTruthy();
      expect(screen.getByText(`Time: ${movie.time}`)).toBeTruthy();
    });
  });

  test('renders a <li /> for each genre', () => {
    render(<Movies />);
    const genreItems = screen.getAllByRole('listitem');
    const totalGenres = movies.reduce((sum, movie) => sum + movie.genres.length, 0);
    expect(genreItems.length).toBe(totalGenres);
  });
});