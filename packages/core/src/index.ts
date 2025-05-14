import express, { type Request, type Response } from 'express';

import render from './utils/render';

const app = express();

app.use('/', express.static(__dirname));
console.log(__dirname);

app.get('/test', async (request: Request, response: Response) => {
  try {
    const html = await render();
    response.status(200).send(html);
  } catch (e) {
    console.log(e);
    response.status(500).json({
      error: e,
    });
  }
});

app.listen(3000, () => {
  process.stdout.write(`Server is listening on port ${3000}`);
});
