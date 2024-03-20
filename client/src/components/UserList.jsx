import { useEffect, useState } from "react";
import UserItemSmall from "./UserItemSmall";
import {getAll} from "../services/UserService";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAll().then(users => setUsers(users));
    console.log("UserList Engaged")
  }, []);

  return (
    <ul>
      {users?.length > 0 ? (
        users.map((user) => (
          <li key={`users_${user.userId}`}>
            <UserItemSmall user={user} />
          </li>
        ))
      ) : (
        <h3>Could not fetch user</h3>
      )}
    </ul>
  );
}

export default UserList;

/** Denna är ej i anvädning, men hade kunna återanvänts i någon slags front-end admin syfte.
 */