import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchUsersValue } from "./slices/userSlice";

const Data = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.data);
    const status = useSelector((state) => state.users.status);
    const error = useSelector((state) => state.users.error);

    useEffect(() => {
        if(status === 'idle'){
            dispatch(fetchUsersValue());
        }
    }, [status, dispatch])
    if(status === 'loading'){
        return <h1>Loading...</h1>;
    }

    if(status === 'failed'){
        return <h1>Error: {error}</h1>;
    }

    return(
        <div>
            <h1>Users:</h1>
            <ul>
                {users?.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
};

export default Data;