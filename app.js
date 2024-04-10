const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Second Express App!');
});

app.listen(2000, () => {
  console.log('Second app listening on port 2000');
});
