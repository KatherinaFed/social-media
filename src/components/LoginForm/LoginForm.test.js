import { Provider } from 'react-redux';
import { act, render, screen, fireEvent } from '@testing-library/react';
import { LoginForm } from './LoginForm';
import { store } from '../../store';

describe('Submit Login Form', () => {
  test('Should have - Email, Password, submit Button field', () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

    const emailField = screen.getByLabelText(/email/i);
    const passwordField = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button');

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('Should allow the user to submit their credentials', async () => {
    const mockSubmit = jest.fn();
    // store.dispatch = jest.fn();
    const email = 'email@gmail.com';
    const password = 'pass123';

    render(
      <Provider store={store}>
        <LoginForm login={mockSubmit} />
      </Provider>
    );

    await act(async () => {
      const emailField = screen.getByLabelText(/email/i);
      const passwordField = screen.getByLabelText(/password/i);
      const rememberMeCheckbox = screen.getByTestId('checkbox');

      fireEvent.change(emailField, {
        target: { value: email },
      });
      fireEvent.change(passwordField, {
        target: { value: password },
      });
      fireEvent.change(rememberMeCheckbox, {
        target: { value: false },
      });
    });

    await act(async () => {
      const submitButton = screen.getByRole('button');
      fireEvent.click(submitButton);
    });

    expect(mockSubmit).toHaveBeenCalled();
    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith({
      email: 'email@gmail.com',
      password: 'pass123',
      rememberMe: false,
      captcha: '',
    });
  });
});
