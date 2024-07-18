let listStudent = localStorage.getItem("listStudent");
if(listStudent === null){
    listStudent = [];
}else{
    listStudent = JSON.parse(listStudent);
}
//khởi tạo dom
const $btnCreate = document.getElementById('create');
const $btnUpdate = document.getElementById('update');
const $btnSearch = document.getElementById('search');
const $inputName = document.getElementById('name');
//const $inputGender = document.getElementById('gender');
const $inputMathScore = document.getElementById('math_score');
const $inputEnglishScore = document.getElementById('english_score');
const $inputLiteratureScore = document.getElementById('literature_score');
const $inputKeyword = document.getElementById('keyword')

//Mỗi trang hiển thị 1 dữ liệu
const LIMIT = 1;
let pageCurrent = 1;

let indexStudentUpdate = -1;

function calAverageScore(math_score, english_score, literature_score){
    let Avrage = ((Number(math_score) + Number(english_score) + Number(literature_score)) / 3).toFixed(2);
    return(Avrage);
}

//Read: hiển thị thông tin danh scahs học sinh
function renderListStudent(students){
    let string ="";
    const start = LIMIT * pageCurrent -1 ;
    const end = LIMIT * pageCurrent;
    const data = students.slice(start, end)
    for(let i = 0; i < data.length; i++){
        string += `
            <tr>
                <th scope="row">${i + 1}</th>
                <td>${data[i].name}</td>
                <td>${data[i].gender}</td>
                <td>${data[i].math_score}</td>
                <td>${data[i].english_score}</td>
                <td>${data[i].literature_score}</td>
                <td>${calAverageScore(data[i].math_score,data[i].english_score, data[i].literature_score)}</td>
                <td>
                    <button class="btn btn-success" onclick="updateStudent(${i})">Update</button>
                    <button class="btn btn-danger" onclick="deleteStudent(${i})">Delete</button>
                </td>
            </tr>
        `;
    }
    document.getElementById('info-student').innerHTML = string;

    //render pagination
    let strPagination = '';
    for(let i = 0; i < students.length / LIMIT; i++){
        strPagination += ` <li class="page-item"><a class="page-link ${pageCurrent === i + 1 ? 'active' : ''}" href="#" onclick="getCurrentPage(${i+1})">${i+1}</a></li>`
    }

    document.getElementById('pagination').innerHTML = `
            <ul class="pagination">
              <li class="page-item"><a class="page-link ${pageCurrent === 1 ? 'disabled' : ''}" href="#" onclick="getCurrentPage(-1)">Previous</a></li>
              ${strPagination}
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
    `
}
renderListStudent(listStudent);
//Create
//B1: Gán sự kiện onclick cho button create student
$btnCreate.onclick = function(){
    //B2:Xử lý trong hàm
    //Lấy được các thông tin người dùng nhập trong input
    const name = $inputName.value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const math_score = $inputMathScore.value;
    const english_score = $inputEnglishScore.value;
    const literature_score = $inputLiteratureScore.value;

    //Tạo mới 1 object
    const newStudent = {
        id: Date.now(),
        name: name,
        gender: gender,
        math_score: math_score,
        english_score: english_score,
        literature_score: literature_score,
    }
    console.log('newStudent', newStudent);

    //Đẩu ob vào mảng
    listStudent.push(newStudent);

    //Cập nhập dữ liệu vapf localstorage
    localStorage.setItem("listStudent", JSON.stringify(listStudent));

    //Gọi hàm để hiển thị danh sách học sinh
    renderListStudent(listStudent);
};

//Bước 1: gán sự kiện onclick cho các button delete
function deleteStudent(index){
    //B2: Xử lý trong hàm
    //Lấy được id của học sinh
    //Tìm index của học sinh trong danh sách
    //Xoá học sinh khỏi danh sách
    listStudent.splice(index, 1);

    //Cập nhập dữ liệu vapf localstorage
    localStorage.setItem("listStudent", JSON.stringify(listStudent));

    //GỌi lại hàm renderListStudent để in ra danh sách mới nhất
    renderListStudent(listStudent);
}

//Khi click vào button update -> lấy thôing tin và show toàn bộ thông tin của bạn học sinh đó lên input đương ứng
function updateStudent(index){
    indexStudentUpdate = index;
    const student = listStudent[index];
    console.log('update...', student);

    $inputName.value = student.name;
    document.querySelector(`input[value="${student.gender}"]`).checked = student.gender;
    $inputMathScore.value = student.math_score;
    $inputEnglishScore.value = student.english_score;
    $inputLiteratureScore.value = student.literature_score;

    //ẩn button "create student" và hiển thị button update student
    $btnUpdate.style.display = "inline";
    $btnCreate.style.display = "none";
}

//b1:Gán sk onclick cho button update student
$btnUpdate.onclick = function(){
    //b2: Lấy thông tin người dùng đã chỉnh sửa
    const name = $inputName.value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const math_score = $inputMathScore.value;
    const english_score = $inputEnglishScore.value;
    const literature_score = $inputLiteratureScore.value;

    //b3: Cập nhật thông tin mới vapf danh sách
    listStudent[indexStudentUpdate].name = name;
    listStudent[indexStudentUpdate].gender = gender;
    listStudent[indexStudentUpdate].math_score = math_score;
    listStudent[indexStudentUpdate].english_score = english_score;
    listStudent[indexStudentUpdate].literature_score = literature_score;

    //b4: lưu vào local storage
    localStorage.setItem("listStudent", JSON.stringify(listStudent));

    //b5: gọi lại hàm render
    renderListStudent(listStudent);

    //b6: reset lại các input
    $inputName.value = "";
    $inputMathScore = "";
    $inputEnglishScore = "";
    $inputLiteratureScore = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
    indexStudentUpdate = -1;

    //ẩn button "update student" và hiển thị button create student
    $btnUpdate.style.display = "none";
    $btnCreate.style.display = "inline";

}

// //gán event onclick cho button search
// $btnSearch.onclick = function(){
//     //Lấy được keyword người dùng nhập
//     const keyword = $inputKeyword.value;
// //Tìm kiếm ác học sinh phù hợp với keyword vừa nhập
//     const result = [];
//     for(let student of listStudent){
//         if(student.name.toLowerCase().includes(keyword.toLowerCase())){
//             result.push(student);
//         }
//     }
// //gọi hàm renderliststudent để in ra thông tin của học sinh
// renderListStudent(result);
// }

//gán event oninput cho button search
$inputKeyword.oninput = function(){
    //Lấy được keyword người dùng nhập
    const keyword = $inputKeyword.value;
    //Tìm kiếm ác học sinh phù hợp với keyword vừa nhập
    const result = [];
    for(let student of listStudent){
        if(student.name.toLowerCase().includes(keyword.toLowerCase()) || student.math_score == keyword){
            result.push(student);
        }
    }
//gọi hàm renderliststudent để in ra thông tin của học sinh
renderListStudent(result);
}

//Pagination

function getCurrentPage(page){
    if(page === -1){
        pageCurrent = pageCurrent - 1;
    }else{
        pageCurrent = page;
    }
    
    renderListStudent(listStudent);
}