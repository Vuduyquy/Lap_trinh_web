import {useState} from 'react';
const App = () => {
  // const handleClickButton = () =>{
  //   console.log('Bạn vừa click vào phần tử')
  // }
  //   const handleClickButton = (name) =>{
  //     console.log(`Hello ${name}`)
  //   }
  // //Tạo hàm mô phỏng
  //   const handleClickElement = () =>{
  //     handleClickButton('T3H');
  //   }
  //   const handleChangeInput = (event) =>{
  //     console.log(event.target.value);
  //     console.log('Input vừa thay đổi')
  //   }

  // const [number, setNumber] = useState(1);
  // const [isShowGreeting, setIsShowGreeting] = useState(false);

  // const [students, setStudents] = useState([
  //   {
  //     id: 1,
  //     name: 'student 1',
  //   },
  //   {
  //     id: 2,
  //     name: 'student 2',
  //   },
  //   {
  //     id: 3,
  //     name: 'student 3'
  //   },
  // ]);

  // const handleAddition = () => {
  //   // number = number + 1;
  //   // console.log(number);
  //   setNumber(number + 1);
  // };

  // const handleSub = () => {
  //   // number = number - 1;
  //   // console.log(number);
  //   setNumber(number - 1);
  // };

  // const topgleShowGreeting = () => {
  //   setIsShowGreeting(!isShowGreeting);
  // }

  // const handleAddStudent = () => {
  //   const newStudent = {
  //     id: 4,
  //     name: 'student 4',
  //   };
  //   setStudents([...students, newStudent])
  // };

  // const [light, setLight] = useState(0);
  // const handleNext =  () =>{
  //   setLight((lights) => (lights + 1) % 3)
  // };

  // const getColor = (index) => {
  //   if(index === light){
  //     if(index === 0) return 'red';
  //     if(index === 1) return 'yellow';
  //     if(index === 2) return 'green';
  //   }
  //   return 'white';
  // }

  const [name, setName] = useState('')
  let nameInput = ''

  const handleChangeName = (event) => {
    nameInput = event.target.value;
  };

  const handleShowName = (event) => {
    setName(nameInput);
  }

  return (
    <>
      {/* <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button 
        style={{ display: 'inline-block', height: '30px' }} 
        onClick={handleAddition}
      > 
        Cộng (+)
      </button>
      <h1 style={{ margin: '0px 12px' }}>{number}</h1>
      <button 
        style={{ display: 'inline-block', height: '30px' }} 
        onClick={handleSub}
      >
        Trừ (-)
      </button>
    </div>

    <div>
        <button 
          style={{display:'inline-block', height: '30px'}}
          onClick={topgleShowGreeting}
        >
          Hiển thị lời chào
        </button>
        <h1 style={{display: isShowGreeting ? 'block':'none'}}>
          Xin chào các bạn
        </h1>
    </div>

    <div>
      <button onClick={handleAddStudent}>Thêm học sinh</button>
      {
        students.map((student) => (
          <p key={student.id}>{student.name}</p>
        ))
      }
    </div> */}

      {/* <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '20px',
        }}
      >
        <button onClick={handleNext}>NEXT</button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          marginTop: '20px',
        }}
      >
        <div
          style={{
            borderRadius: '50%',
            border: '1px solid black',
            background: getColor(0),
            width: '50px',
            height: '50px',
          }}
        ></div>

        <div
          style={{
            borderRadius: '50%',
            border: '1px solid black',
            background: getColor(1),
            width: '50px',
            height: '50px',
          }}
        ></div>

        <div
          style={{
            borderRadius: '50%',
            border: '1px solid black',
            background: getColor(2),
            width: '50px',
            height: '50px',
          }}
        ></div>
      </div> */}

      <div>
        <div>
          <input placeholder='Nhập tên:' onChange={handleChangeName}/>{' '}
          <button onClick={handleShowName}>Hiển thị tên</button>
        </div>
        <h1>Tên bạn là: {name}</h1>
      </div>
    </>
    
  );
};

export default App;
