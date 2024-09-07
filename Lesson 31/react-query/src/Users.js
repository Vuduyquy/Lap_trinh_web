import React, {useEffect, useState } from "react";

const Users = () => {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          'http://localhost:8080/users'
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (Loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>{user.username}</li>
      ))}
    </ul>
  );
};

export default Users;
