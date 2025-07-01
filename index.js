const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ backend: 'This is Backend 1' }); // đổi thành Backend 2 ở project 2
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
