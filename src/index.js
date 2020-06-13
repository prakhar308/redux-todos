import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import rootReducer from './reducers/';
import { createStore } from 'redux';

const store = createStore(rootReducer)

ReactDOM.render(
	<Root store={store} />,
  	document.getElementById('root')
);
