// console.log(1);
// setTimeout(function(){
//     console.log(2);
// }, 0)
// console.log(3);
// console.log(4);

// let dowload = new Promise(function(resolve, reject){
//     console.log('Bắt đầu tải xuống....');


//     setTimeout(function(){
//         let status = 'success';
//         if(status === 'success'){
//             resolve('Tải xuống thành công');
//         }else{
//             reject('Tải xuống thất bại');
//         }
//     }, 5000)
// })

// dowload.then(function(message){
//    console.log('vào then')
//     console.log(message);
// }).catch(function(error){
//    console.log('Vào catch')
//     console.log(error);
// });


// function dowload(callbackResolve, callbackReject){
//     console.log('Bắt đầu tải xuống...');
//     setTimeout(function(){
//         let status = 'error';
//         if(status === 'success'){
//             callbackResolve('Tải xuống thành công');
//         }else{
//             callbackReject('Tải xuống thất bại')
//         }
//     }, 5000)
// }

// dowload(
//     function(message){
//         console.log('Vào resolve');
//         console.log(message);
// },
//     function(message){
//         console.log('Vào reject');
//         console.log(message);
// }
// );

//return promise
function dowloadFile(url){
    return new Promise(function(resolve, reject){
        console.log('Bắt đầu tải xuống ....');
        setTimeout(function(){
            let status = 'success';
            if(status === 'success'){
                resolve('Tải xuống thành công ' + url);
            }else{
                reject('tải xuống thất bại')
            }
        }, 5000)
    })
}

// dowloadFile('url1')
// .then(function( message){
//     console.log(message);

//     return dowloadFile('url2');
// })
// .then(function( message){
//     console.log(message);

//     return dowloadFile('url3');
// })
// .catch(function(err){
//     console.log(err);
// })
// .finally(function(){
// console.log('Xong');
// })

// function dowloadAll(){
//     dowloadFile('url1')
// .then(function( message){
//     console.log(message);

//     return dowloadFile('url2');
// })
// .then(function( message){
//     console.log(message);

//     return dowloadFile('url3');
// })
// .catch(function(err){
//     console.log(err);
// })
// .finally(function(){
// console.log('Xong');
// })
// }

// async function dowloadAll(){
//    try{
//     let f1 = await dowloadFile("url1");
//     console.log(f1);
//     let f2 = await dowloadFile("url2");
//     console.log(f2);
//     let f3 = await dowloadFile("url3");
//     console.log(f3);
//    }catch(err){
//     console.log(err);
//    }
//    finally{
//     console.log("xong");
//    }
// }
// dowloadAll()

console.log(1);
console.log(2);
try{
    const PI = 3.14;
    PI = 10;
}catch(err){
    console.log(err);
}finally{
    console.log("Xong")
}
console.log(3);
console.log(4);