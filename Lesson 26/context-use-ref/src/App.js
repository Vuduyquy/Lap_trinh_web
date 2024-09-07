import { useRef, useState } from "react";
import Component1 from "./Component1";

const App = () => {
  const valueRef = useRef(10);
  const [valueState, setValueState] = useState(20);
  let valueNormal = 30

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  

  const handleForcus = () => {
    inputRef1.current.focus();
  };
  const handleForcus2 = () => {
    inputRef2.current.focus();
  }

  console.log('giá trị của useref: ',valueRef.current);
  console.log('giá trị của useState: ',valueState);
  console.log('giá trị của biến bình thường: ',valueNormal);

  //* Đối với biến bình thường: khi thay đổi giá trị => không gây ra render. Khi component render lại => biến đó bị reset lại(khởi tạo lại)
  //* Đối với giá trị được khởi tạ từ state => khi thay đổi giá trị => render lại component. Khi component render lại => biến đí vẫn giữ nguyên giá trị(Không bị khởi tạo lại)
  //* Đối với giá trị được khởi tạo từu useref: Khi thay đooir giá trị => không gây ra render. Khi component render lại => biến đó vẫm được giữ nguyên giá trị( không bị khởi tạo lại)

  const handleChangeValueRef = () => {
    valueRef.current = valueRef.current + 1;
  };

  const handleChangeValueState = () => {
    setValueState(valueState + 1);
  };

  const handleChangeValueNormal = () => {
    valueNormal = valueNormal + 1;
  }
  return (
    <>
    <div>
      <button onClick={handleChangeValueRef}>Thay đổi valueRef</button>
      <button onClick={handleChangeValueState}>Thay đổi valueState</button>
      <button onClick={handleChangeValueNormal}>Thay đổi valueNormal</button>
    </div>
    <hr/>
      <div>
        <div>
          <input ref={inputRef1} type='text' />
          <button onClick={handleForcus}>Forcus vào input</button>
        </div>
        <div>
          <input ref={inputRef2} type='text' />
          <button onClick={handleForcus2}>Forcus vào input</button>
        </div>
      </div>

      <h1>Tree component</h1>
      <Component1 />
    </>
  )
}

export default App;
