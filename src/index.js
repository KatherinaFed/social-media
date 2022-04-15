import ReactDOM from 'react-dom';
import { store } from './store/index';
import { RunApp } from './App';

window.store = store;

ReactDOM.render(
  <RunApp />,
  document.getElementById('root')
);
