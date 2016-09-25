import React from 'react';
import ReactDOM from 'react-dom';
// Fetch Polyfill
import 'whatwg-fetch';

import './html5reset.css';

import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('root'));
