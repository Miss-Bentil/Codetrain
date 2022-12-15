import React from "react";
import { useState } from "react";

import ListofUsers from "./ListofUsers";
import UserForm from "./UserForm";

function Users() {
  let [users, setUsers] = useState([]);
  let [formType, setFormType] = useState("Add User");
  let [currentUser, setCurrentUser] = useState("");

  let addUser = (userObj) => {
    setUsers([...users, userObj]);
  };

  let deleteUser = (id) => {
    let remainingUsers = users.filter((item) => item.id !== id);
    setUsers(remainingUsers);
  };

  let editUser = (id) => {
    setFormType("Update");

    let user = users.find((user) => {
      return user.id === id;
    });

    setCurrentUser(user);
  };




let update = (userObj,id) => {
    let newList = [...users];
    let index = newList.findIndex(user => user.id === id);
    newList[index] = userObj;
    
     setUsers(newList)
  
    setFormType("Add User")
  }


  return (
    <div>
      <div className="row justify-content-center pt-5">
        <UserForm
          Adduser={addUser}
          Formtype={formType}
          currentUser={currentUser}
          update = {update}
        />
      </div>
      <div className="row justify-content-center pt-5">
        <ListofUsers
          users={users}
          deleteuser={deleteUser}
          edituser={editUser}
        />
      </div>
    </div>
  );
}

export default Users;
