import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import store from './store/store';
// import { configureStore } from './store';
 
// const store= configureStore();
// console.log('store', store.getState());
ReactDOM.render(
  <Provider store={store} > 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

 
