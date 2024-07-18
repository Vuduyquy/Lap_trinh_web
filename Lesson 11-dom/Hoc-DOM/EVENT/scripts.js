//Tìm element theo id
// const $paragraph =  document.getElementById('paragraph');
// console.log('$paragraph:', $paragraph);

//Tìm element theo tagname
//const $tapP = document.getElementsByTagName('p');
//console.log('$tapP', $tapP[0]);

// const $text = document.getElementsByClassName('text');
// console.log('$text:', $text)

//docurment.querySelector
// const $element = document.querySelector('p#paragraph.text');
// console.log('$element:', $element);

//docurment.querySelectorAll
// const $elements = document.querySelectorAll("p#paragraph.text");
// console.log("$elements:", $elements);
// const $h1 = document.getElementById('h1');
// console.log('h1:', $h1);
//innerHTML: thay đooir nd bên trong element
//$h1.innerHTML = '<a href="#">Nội dung được thay đổi</a>';
//console.log($h1.innerHTML);
//innerText: thay đổi nd văn bản bên trong element
//$h1.innerText = '<a href="#">Nội dung được thay đổi</a>';

const $tagA = document.getElementById('tagA');
//Cách 1: Thay đổi giá trị thuộc tính trong thẻ html
// $tagA.herf = 'https://www.google.com/';
// console.log($tagA.herf);

//Cách 2: Làm với mọi trường hợp
// $tagA.setAttribute('href', 'https://.youtube.com/')
// console.log($tagA.getAttribute('href'));
// console.log($tagA.getAttribute('data-src'))

//Thay đổi style của 1 element
// $tagA.style.color = 'red';
// $tagA.style.fontSize = '30px';

//Xoá thuộc tính của element
//$tagA.removeAttribute('data-src');

//tạo mới element
// let $tagH2 = document.createElement('h2');
// $tagH2.innerHTML = 'Nội dung thẻ h2';
// console.log('$tagH2:', $tagH2);

// document.body.appendChild($tagH2);
//$tagA.remove();

// $tagA.classList.toggle('test');

//VD:
// Tạo một danh sách đồ vật yêu thích của bạn với ul#favorite-list và các li.favorite-list-item. 

// Sử dụng DOM để thay đôi nội dụng của tất cả li.favorite-list-item thành"I love this thing".
// const $tagsLi = document.querySelectorAll('li.favorite-list-item');
// for(let tagLi of $tagsLi){
//     tagLi.innerText = 'I love this thing';
//     tagLi.style.color = 'red';
// }
// Sử dụng DOM để thay đổi màu chữ của các li.favorite-list-item thành màu đỏ. 
// Nhập vào 1 đoạn text từ bàn phím. Thêm vào ul#favorite-list một li có nội dung là text vừa nhập vào.
// const text = 'Xe máy';
// const $tagLi = document.createElement('li');
// $tagLi.innerText = text;
// const $tagUl = document.getElementById('favorite-list');
// $tagUl.appendChild($tagLi);
