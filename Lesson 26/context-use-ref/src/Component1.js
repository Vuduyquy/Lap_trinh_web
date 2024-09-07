import React, { useState } from 'react';
import Component2 from './Component2';
import Component3 from './Component3';
import DataContext from './contexts/DataContext';

const Component1 = () => {
    const [dackMode, setDackMode] = useState(false)
    const data = [1, 2, 3, 4, 5];

    const valueContext = {
        data: ['Một', 'hai', 'ba', 'bốn', 'năm'],
        dackMode,
        setDackMode: setDackMode,
    }
    return <div style={{background: dackMode ? 'black' : 'white'}}>
        <DataContext.Provider value={valueContext}>
            <h1>
                Component1
            </h1>
            <Component2 data={data} />
            <Component3 />
        </DataContext.Provider>

    </div>
};

export default Component1