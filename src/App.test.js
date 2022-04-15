import ReactDOM from 'react-dom';
import { RunApp } from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RunApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
