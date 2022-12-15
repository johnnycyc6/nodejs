// axios await 版本
// 把 query string 抽出來當變數，用 params 的方式去設定

// 1. 安裝 npm i axios
// 2. 引用 require
// 3. 去讀官方文件
const axios = require('axios');

// http://54.71.133.152:3000/stocks?stockNo=2618&date=202211

const fs = require('fs');

let p = (fileName) => {
    let toreadFile = new Promise((reject, resolve) => {
       fs.readFile(fileName, "utf-8", (err, data) => {
        if(err) {
            resolve(err);
        }else{
            reject(`成功讀到資料:, ${data}`);
        }
       });
    });
    return toreadFile;
};
p('test.txt').then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
});
p('test-1.txt').then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
});

(async () => {
    try {
      let stockNo = '2618';
      let date = '20221111';
      let response = await axios.get(`http://54.71.133.152:3000/stocks`, {
        params: {
          stockNo,
          date,
        },
      });
  
      console.log('await', response.data);
    } catch (e) {
      console.error(e);
    }
  })();