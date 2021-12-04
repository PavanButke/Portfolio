import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import App from './App';
import userReducer from './redux/Reducers/userReducers';


let myStore = createStore(userReducer);


ReactDOM.render(

  <Provider store={myStore}>
    <App/>    
  </Provider>,
  document.getElementById('root')
);


