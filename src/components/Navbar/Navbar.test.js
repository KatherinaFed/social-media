import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { render, screen, waitForElement } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { App } from '../../App';
import { store } from '../../store';
import { Navbar } from './Navbar';

test('should redirect and update history', () => {
  const { getByRole } = render(
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
      </Provider>
    </BrowserRouter>
  );

  const homepage = getByRole('link', { name: 'Homepage' });
  const messages = getByRole('link', { name: 'Messages' });
  const users = getByRole('link', { name: 'Users' });
  const settings = getByRole('link', { name: 'Settings' });

  expect(homepage).toHaveAttribute('href', '/profile');
  expect(messages).toHaveAttribute('href', '/messages');
  expect(users).toHaveAttribute('href', '/users');
  expect(settings).toHaveAttribute('href', '/settings');
});
