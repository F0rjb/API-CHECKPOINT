import axios from 'axios';
import React, { useEffect, useState } from 'react';
import User from './User';

const UserList = () => {
  const URL = 'https://jsonplaceholder.typicode.com/users';
  const [responseState, setresponseState] = useState([]);
  const response = () => {
    axios
      .get(URL)
      .then(response => {
        setresponseState(response.data);
        console.table(responseState);
      })
      .catch(error => console.error(error));
  };
  //     console.log(error, "axios");
  useEffect(() => {
    response();
  }, []);
  console.table(responseState.data);

  return (
    <>
      {responseState.map((el, key) => (
        <User User={el} key={key} />
      ))}
    </>
  );
};

export default UserList;
