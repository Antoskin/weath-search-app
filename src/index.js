
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  ReduxPromise  from 'redux-promise';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import reducer from './reducers/index';


// const store = createStore(reducer);
const storeWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(<Provider store={storeWithMiddleWare(reducer)}>
                    <App  />
                </Provider>, document.querySelector('#root'));



