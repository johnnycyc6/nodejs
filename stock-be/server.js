const express = require('express');
// 利用 express 這個框架建立一個 web app
const app = express();

//中間件
app.use((req, res, next) => {
    console.log('這是一個中間件');
    next();
})

// app.[Method]
// get, post, put, patch, delete, option, head
app.get('/', (req, res) => {
  res.send('Hello Express 2');
});

app.listen(3001, () => {
  console.log('Server running at port 3001');
});


