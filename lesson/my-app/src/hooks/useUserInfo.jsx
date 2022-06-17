import {useState, useEffect} from "react";

const useUserInfo = () => {
  const [user, setUsers] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return user;
}

export default useUserInfo;
