const fs = require('fs');


let p = (fileName) => {
    let toreadFile = new Promise((resolve, reject) => {
       fs.readFile(fileName, "utf-8", (err, data) => {
        if(err) {
            reject('出錯了', err);
        }else{
            resolve(`成功讀到資料:, ${data}`);
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


