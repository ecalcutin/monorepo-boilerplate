import { renderToString } from 'react-dom/server';
import { App } from './App';
import React from 'react';

export default renderToString(React.createElement(App));
