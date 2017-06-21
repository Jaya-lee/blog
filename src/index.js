import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import 'highlight.js/styles/vs.css';
import './css/main.css';
import './css/post.css';
ReactDOM.render(<App/>,document.querySelector('#root'))
