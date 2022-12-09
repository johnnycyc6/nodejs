let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        let now = new Date();
        resolve(`完成工作 刷牙 at ${now.toISOString()}`);        
    }, 4000);
});

p.then((data) => {
    console.log('拿回資料', data);
}).catch((err) => {
    console.error('發生錯誤', err);
});
