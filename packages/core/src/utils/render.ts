import path from 'node:path';
import fs from 'node:fs';
import React from 'react';
import { renderToString } from 'react-dom/server';

import { App } from '@packages/web/src/index';

const render = async () => {
  return new Promise((resolve, reject) => {
    const html = path.resolve(__dirname, './index.html');
    const rendered = renderToString(React.createElement(App));
    console.log(html);

    fs.readFile(html, 'utf8', (err, html) => {
      if (err) {
        reject(err);
      }
      resolve(
        html.replace(
          '<div id="root"></div>',
          `<div id="root">${rendered}</div>`,
        ),
      );
    });
  });
};

export default render;
