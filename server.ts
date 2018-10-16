'use strict';

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('*', (req: any, res: any) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, (err: any) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Dev server listening on http://localhost:${port}`);
  }
});
