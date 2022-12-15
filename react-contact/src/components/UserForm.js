import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";

function UserForm({ Adduser, Formtype, currentUser,update }) {
  let [name, setName] = useState("");
  let [number, setNumber] = useState("");
  let [location, setLocation] = useState("");
  let [id, setId] = useState("");

  useEffect(() => {
    let setUser = () => {
      let { name, number, location, id } = currentUser;
      setName(name);
      setNumber(number);
      setLocation(location);
      setId(id);
      
    };
    if (currentUser != null) {
      setUser();
    }
  }, [currentUser]);

  let submitDeets = (e) => {
    e.preventDefault();
    let userObj = { name, number, location, id: uuid() };
    Adduser(userObj);
    setName("");
    setNumber("");
    setLocation("");
  };

  const editDetails = (e) => {
    e.preventDefault();
    let userObj = { name, number, location, id: uuid() };
    update(userObj, currentUser.id)
    setName("");
    setNumber("");
    setLocation("");
    
    
  };

  let setFormtype = () => {
    return Formtype === "Add User" ? (
      <Button variant="primary" type="submit">
        Add User
      </Button>
    ) : (
      <Button variant="primary" type="submit">
        Update User
      </Button>
    );
  };

  return (
    <div>
      <Form onSubmit={Formtype === "Add User" ? submitDeets : editDetails}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            pattern="[0-9]*"
            value={number}
            required
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your location"
            value={location}
            required
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </Form.Group>
        {setFormtype()}
      </Form>
    </div>
  );
}

export default UserForm;
