import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import axios from 'axios';

const fetchUsers = async () => {
    try {
        const response = await fetch('http://localhost:8080/users');
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};

const addUser = async () => {
    const newUser = {
        email: "test-react-query10@gmail.com",
        password: "12345678",
        username: "test-react-query10",
        role: "user"
    }
    return axios.post('http://localhost:8080/users')
}
const UsersReactQuery = () => {

    const {data, isLoading, error} = useQuery({
        queryKey: ['users'],
        queryFn : fetchUsers,
        //stale time: là khoảng thời gian mà dữ liệu được coi là mới sau khi lấy từ api về
        staleTime: 60000,
        //gctime: là khoảng thời gian mà dữ liệu được lưu trong cache
        gcTime: 60000,
        refetchOnWindowFocus: false,
    });

    const queryClient = useQueryClient();
    const mutation = useMutation();

    if(isLoading){
        return <h1>Loading...</h1>;
    }
    if(error){
        return <h1>Error: {error.message}</h1>
    }

    
    return (
    <ul>
        {data?.data?.map((user) => (
            <li key={user.id}>{user.username}</li>
        ))}
    </ul>
    )
};

export default UsersReactQuery;