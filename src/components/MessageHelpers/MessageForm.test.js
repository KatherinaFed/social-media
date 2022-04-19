import { Provider } from 'react-redux';
import { act, render, screen, fireEvent } from '@testing-library/react';
import { store } from '../../store';
import MessageForm from './MessageForm';

describe('Submit Message Form', () => {
  test('should have message field', () => {
    const { getByPlaceholderText, getByRole } = render(
      <Provider store={store}>
        <MessageForm />
      </Provider>
    );

    const messageField = getByPlaceholderText(/Type a message.../i);
    const submitButton = getByRole('button');

    expect(messageField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('should submit a message', async () => {
    const mockSubmit = jest.fn();
    const testMessage = 'Hello World!';

    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <MessageForm sendMessage={mockSubmit} />
      </Provider>
    );

    await act(async () => {
      const messageField = getByPlaceholderText(/Type a message.../i);

      fireEvent.change(messageField, {
        target: { value: testMessage },
      });
    });

    await act(async () => {
      const submitButton = screen.getByRole('button');
      fireEvent.click(submitButton);
    });

    expect(mockSubmit).toHaveBeenCalled();
    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith(testMessage);
  });
});
