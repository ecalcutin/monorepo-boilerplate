import fs from 'node:fs';
import path from 'node:path';

import App from '@packages/web/src/server-entry';

const render = async () => {
  return new Promise((resolve, reject) => {
    const html = path.resolve(__dirname, './index.html');

    fs.readFile(html, 'utf8', (err, html) => {
      if (err) {
        reject(err);
      }
      resolve(
        html.replace('<div id="root"></div>', `<div id="root">${App}</div>`),
      );
    });
  });
};

export default render;
