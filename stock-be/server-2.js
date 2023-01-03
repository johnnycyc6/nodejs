const express = require('express');
const mysql2 = require('mysql2/promise');
// 利用 express 這個框架建立一個 web app
const app = express();
require('dotenv').config();
const cors = require('cors');


app.use(cors());


let pool = mysql2.createPool({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
  // 限制 pool 連線數的上限
  connectionLimit: 10,
});
// app.use(express.static('./static'));

// middleware => pipeline pattern
// 中間件
// app.use((req, res, next) => {
//   console.log('這裡是的一個中間件 A');
//   req.mfee31 = '1111班';
//   next();
//   // res.send('這裡是 A 中間件');
// });

// app.use((req, res, next) => {
//   console.log('這裡是的一個中間件 B');
//   req.dt = new Date().toISOString();
//   next();
// });

// app.[Method]
// get, post, put, patch, delete, option, head
// 路由中間件
// app.get('/', (req, res, next) => {
//   console.log('這裡是首頁 2', req.mfee31, req.dt);
//   res.send('Hello Express 9');
// });

// app.get('/api', (req, res, next) => {
//   res.json({
//     name: 'John',
//     age: 18,
//   });
// });


app.get('/api/stocks', async (req, res, next) => {
  // let results = await connection.query('SELECT * FROM stocks');
  // let data = results[0];
  
  let [data] = await pool.query('SELECT * FROM stocks');
  res.json(data);
});


app.get('/api/stocks/:stockId', async (req, res, next) => {
  // console.log('/api/stocks/:stockId => ', req.params.stockId);
  // 會用 prepared statement 的方式來避免發生 sql injection
  let [data] = await pool.query('SELECT * FROM stock_prices WHERE stock_id=?', [req.params.stockId]);
  res.json(data);
});


app.post('/api/stocks', (req, res) => {
  console.log('POST/api/stocks', req.body);
  const q = "INSERT stock_mfee INTO stocks (`id`,`name`) VALUES (?)"
  const values = [
    res.body.id,
    res.body.name,
  ]

  pool.query(q, [values], (err, data) => {
    if (err) return res.json(err)
    return res.json("stock新增成功")
  })

  res.json({});
})
// app.use((req, res, next) => {
//   console.log('這裡是的一個中間件 C');
//   next();
// });

// app.get('/test', (req, res, next) => {
//   console.log('這裡是 test 頁面', req.dt);
//   res.send('Hello Test 1');
// });

// // 放在所有的路由中間件的後面
// // 前面所有的路由都比不到對的網址時，就會掉到這裡來
// // --> 這就是一個 404 的情況
// // 利用了中間件會依照程式碼順序來執行的特性
// app.use((req, res, next) => {
//   console.log('這裡是 404');
//   res.send('沒有這個網頁啦');
// });

app.listen(3001, () => {
  console.log('Server running at port 3001');
});