// function mainFunction(callback){
//     console.log('Luồng chính đang thực thi');

//     setTimeout(function(){
//         console.log('Main function is done');
//         callback();

//     }, 1000)
// }

// function callbackFunction(){
//     console.log('Callback function is done');
// }
// mainFunction(callbackFunction);

// function mainFunction(){
//     return new Promise(function(resolve, reject){
//         console.log('Luồng chính đang thực thi');
//         setTimeout(function(){
//             console.log('Luồng chính thực thi xong');
//             resolve();
//         }, 2000)
//     })
// }
// mainFunction().then(function(){
//     console.log('callback được gọi');
// })

//setTimeout: là sẽ delay trong khoảng thời gian X, rồi mới thực thi
//setTimeout(callback, timeout);
//callback là function sec được thực thi sau 1 khoảng timeout miliseconds
//timeout: đơn vị là milisecond, vd: 3000 miliseconds <=> 3 seconds

// setTimeout(function(){
//     document.getElementById('greeting'). innerHTML = 'Chào mừng bạn đến với trang web'
// }, 2000)

//setInterval(callback, time);
//call sẽ được thực thi sau 1 khoảng tgian là time
// let count = 10;
// const  id = setInterval(function(){
//     console.log("doing...", count);
//     document.getElementById('greeting').innerHTML = count
//     count = count - 1;
//     if(count === 0){
//         document.getElementById('greeting').innerHTML = "end"
//         clearInterval(id);
//     }
// }, 2000)