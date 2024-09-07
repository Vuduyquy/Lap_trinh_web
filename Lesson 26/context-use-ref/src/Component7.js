import React, { useContext } from 'react';
import DataContext from './contexts/DataContext';

const Component7 = () => {
    const {data, dackMode, setDackMode} = useContext(DataContext);
    console.log('Giá trị dataContext trong component7 là:',data )
    return (<div>
        <div>Component7</div>
        <button onClick={() =>setDackMode(!dackMode)}>Set DackMode</button>
    </div>
    );
};

export default Component7;