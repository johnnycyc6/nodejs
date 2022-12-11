// function add(n){
//     let result = 0;
//     for (let i=0;i <= n; i++){
//         result += i;
//     }
//     return result;
// }

// console.log(add(10));

add = (n) => {
    let result = 0;
    for (let i=0;i <= n; i++){
        result += i;
    }
    return result;

    
};
// console.log(add(10));
//let sumArr=[];
function sum(n) {
    let result = 0;
    let sumArr = [];
    for (let i =1; i<=n
        ; i++) {
        sumArr.push(i);
    }
    console.log(sumArr);
    // const result = sumArr.reduce((acc,cur) => acc+cur,0);
    sumArr.forEach(function(item){
        //console.log(item);       
        result += item;         
    });  
    return result;
} 

console.log(sum(10));

['a','b','s','d'].forEach(function(item ,index ,array){
    console.log(item,index,array);
})