import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Status } from './Status';
import { store } from '../../store';

describe('should change status value', () => {

  test('status from props should be in the state', () => {
    render(
      <Provider store={store}>
        <Status status="Wer will, der kann" />
      </Provider>
    );
    const statusText = screen.getByText(/Wer will, der kann/i);

    expect(statusText).toHaveTextContent(/Wer will, der kann/i);
  });

  test('input should be displayed in editMode instead of span', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Status status="Wer will, der kann" />
      </Provider>
    );
    const span = getByTestId(/spanStatus/i);
    userEvent.click(span);
    const input = getByTestId(/inputStatus/i);

    expect(input.value).toBe('Wer will, der kann');
  });

  test('callback should be called', () => {
    store.dispatch = jest.fn();

    const { getByTestId } = render(
      <Provider store={store}>
        <Status status="Wer will, der kann" updateStatus={store.dispatch} />
      </Provider>
    );

    const span = getByTestId(/spanStatus/i);
    userEvent.click(span);
    const input = getByTestId(/inputStatus/i);

    fireEvent.change(input, {
      target: { value: 'test' },
    });
    fireEvent.blur(input);

    expect(store.dispatch).toHaveBeenCalledTimes(2); // ???
  });
});
