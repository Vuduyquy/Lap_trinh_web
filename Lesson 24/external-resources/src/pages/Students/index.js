import { UserAddOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input, Col, Row, Typography, Table, Modal } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
const { Title } = Typography;


const Student = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [statusForm, setStatusForm] = useState('create');
  const [search, setSearch] = useState('')

  const [listStudent, setListStudent] = useState(
    [{
      id: 1,
      name: 'Student 1',
      age: 13,
      gender: 'Nam',
      point: 7,
    },
    {
      id: 2,
      name: 'Student 2',
      age: 14,
      gender: 'Nữ',
      point: 6,
    },
    {
      id: 3,
      name: 'Student 3',
      age: 17,
      gender: 'Nam',
      point: 9,
    },
    {
      id: 4,
      name: 'Student 4',
      age: 19,
      gender: 'Nữ',
      point: 5,
    },
    {
      id: 5,
      name: 'Student 5',
      age: 12,
      gender: 'Nữ',
      point: 7,
    }
    ]
  );


  const columns = [
    {
      title: '#ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Point',
      dataIndex: 'point',
      key: 'point',
    },
    {
      title: 'Hành động',
      render: (_, record) => {
        console.log('record:', record);
        return <>
          <Button type='primary' outline onClick={() => handleUpdateStudent(record)}> Sửa</Button>
          <Button danger style={{marginLeft:'8px'}} onClick={() => handleDeleteStudent(record.id)}> Xoá</Button>
        </>
      }
    }
  ];

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };



  //CÁCH THÔNG THƯỜNG:

  //Khởi tạo state quản lý dữ liệu
  // const [name, setName] = useState('');
  // const [gender, setGender] = useState('');
  // const [age, setAge] = useState('');
  // const [point, setPoint] = useState('');

  // const handleChangeName = (event) => {
  //   setName(event.target.value);
  // };
  // const handleChangeAge = (event) => {
  //   setAge(event.target.value);
  // };
  // const handleChangeGender = (event) => {
  //   setGender(event.target.value);
  // };
  // const handleChangePoint = (event) => {
  //   setPoint(event.target.value);
  // };
  // const handleAddStudent = () => {
  //   const newStudent = {
  //     name: name,
  //     age: age,
  //     gender: gender,
  //     point: point,
  //   };
  //   setListStudent([...listStudent, newStudent]);
  //   setIsOpenModal(false);
  //   setName('');
  //   setAge('');
  //   setGender('');
  //   setPoint('');
  // };

  const formik = useFormik({
    //Khởi tạo giá trị ban đầu
    initialValues: {
      name: '',
      age: '',
      gender: '',
      point: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('bắt buộc phải nhập tên')
        .min(2, 'Tên quá ngắn')
        .max(20, 'Tên quá dài'),
      age: Yup.number()
        .required('Bắt buộc phải nhập tuổi')
        .min(6, 'Tuổi quá nhỏ')
        .max(18, 'Tuổi quá lớn'),
      gender: Yup.string()
        .required('Bắt buộc phải nhập giới')
        .min(2, 'chưa đúng')
        .max(6, 'thừa kí tự'),
      point: Yup.number()
        .required("Bắt buộc phải nhập điểm")
        .min(0, 'điểm không hợp lệ')
        .max(10, 'điểm không hợp lệ')
    }),
    onSubmit: (values, { resetForm }) => {
      //console.log('value',values);
      if (statusForm === 'create') {
        values.id = Date.now();
        setListStudent([...listStudent, values]);
        
      }
      if(statusForm === 'edit'){
        const setListStudentTemp = [...listStudent];
        const indexStudent = setListStudentTemp.findIndex((student) => student.id == values.id);
        setListStudentTemp[indexStudent] = values;
        setListStudent(setListStudentTemp);
      }
      handleCloseModal();
      resetForm();
    }
  });

  const handleCreateStudent = () => {
    setStatusForm('create');
    formik.handleReset();
    handleOpenModal();
  }

  const handleUpdateStudent = (student) => {
    handleOpenModal();
    formik.setFieldValue('name', student.name)
    formik.setFieldValue('age', student.age)
    formik.setFieldValue('gender', student.gender)
    formik.setFieldValue('point', student.point)
    formik.setFieldValue('id', student.id)
    console.log('student:', student);
    setStatusForm('edit');
  }

  const handleDeleteStudent = (id) =>{
    const listStudentTemp = listStudent.filter(student => student.id !== id);
    setListStudent(listStudentTemp);
  }

  const findStudent = (event) => {
    setSearch(event.target.value);
  }

  return (<div style={{ padding: '100px ' }}>

    <Modal
      title={`${statusForm === 'create' ? 'Thêm mới' : 'Cập nhật thông tin'} học sinh`}
      open={isOpenModal}
      //onOk={handleAddStudent}
      onOk={formik.handleSubmit}
      onCancel={handleCloseModal}
      okText={`${statusForm === 'create' ? 'Tạo mới' : 'Cập nhật'}`}
      cancelText='Đóng lại'
    >
      <Input
        placeholder="Mời bạn nhập tên..."
        style={{ marginTop: '8px' }}
        //Cách thông thường:
        // value={name} 
        // onChange={handleChangeName}
        name='name'
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name ? <div style={{ color: 'red' }}>{formik.errors.name}</div> : ''}
      <Input
        placeholder="Mời bạn nhập tuổi..."
        style={{ marginTop: '8px' }}
        // value={age} 
        // onChange={handleChangeAge}
        name='age'
        value={formik.values.age}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.age && formik.errors.age ? <div style={{ color: 'red' }}>{formik.errors.age}</div> : ''}
      <Input
        placeholder="Mời bạn nhập giới tính..."
        style={{ marginTop: '8px' }}
        // value={gender} 
        // onChange={handleChangeGender}
        name='gender'
        value={formik.values.gender}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.gender && formik.errors.gender ? <div style={{ color: 'red' }}>{formik.errors.gender}</div> : ''}
      <Input
        placeholder="Mời bạn nhập điểm..."
        style={{ marginTop: '8px' }}
        // value={point} 
        // onChange={handleChangePoint}
        name='point'
        value={formik.values.point}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.point && formik.errors.point ? <div style={{ color: 'red' }}>{formik.errors.point}</div> : ''}
    </Modal>
    <Title level={2}>Quản lý học sinh</Title>
    <div>
      <Row>
        <Col span={3}>
          <Input prefix={<SearchOutlined />} placeholder='Tìm kiếm...' onChange = {findStudent} />
        </Col>
        <Col style={{ marginLeft: '12px' }}>
          <Button
            type='primary'
            icon={<UserAddOutlined />}
            onClick={handleCreateStudent}>Thêm mới</Button>
        </Col>
      </Row>

      <Row style={{ marginTop: '24px' }}>
        <Col span={12}>
          <Table dataSource={listStudent.filter(student => student.name.toUpperCase().includes(search.toUpperCase()))} columns={columns} />;
        </Col>
      </Row>
    </div>
  </div>
  );
};

export default Student;