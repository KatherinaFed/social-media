import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { store } from '../../store';

test('should redirect to /profile', () => {
  const { getByRole } = render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const header = getByRole('link', { name: 'Social App' });

  expect(header).toHaveAttribute('href', '/profile');
});
