import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store/index';
import { App } from './App';

window.store = store;

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
