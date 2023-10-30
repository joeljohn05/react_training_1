import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(state.user);

  useEffect(() => {
    setUser(state.user);
  }, [state]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const updateUser = (id, user) => {
    console.log(user);
    axios
      .put(`https://652d0dbaf9afa8ef4b26b4ac.mockapi.io/reactdemo/list/users/${id}`, user)
      .then((response) => (response.status === 200 ? 
            navigate('/', { state: { isUpdated: true} }) : null));
  };

  return (
    <div style={{ paddingTop: "10px", paddingLeft: "20%",
    paddingRight: "20%" }}>
      <form
        onSubmit={(event) => {
          console.log(user);
          event.preventDefault();
          updateUser(user.id, user);
        }}
      >
        <div className="form-group">
          <h2>Edit User</h2>
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            value={user.first_name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            value={user.last_name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <button style={{ cursor: "pointer" }} className="modal-button">
          Update user
        </button>
      </form>
    </div>
  );
};

export default Update;
