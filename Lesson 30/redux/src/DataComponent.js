import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from './actions/actionsUser';

const DataComponent = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);
    
    const handleFetchData = () => {
		dispatch(fetchData());
	};

    // useEffect(() => {
    //     dispatch(fetchData());
    // }, [dispatch]);

    if(loading){
        return <h1>Loading...</h1>;
    }

    if(error){
        return <h1>Error: {error}</h1>
    }

    return <div>
        <h1>Data: </h1>
        <button onClick={handleFetchData}>Call apiUser</button>
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>
}

export default DataComponent;