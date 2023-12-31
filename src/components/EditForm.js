import React, { useState, useEffect } from "react";

const EditForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateUser(user.id, user);
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
      <button className="modal-button">Update user</button>
    </form>
  );
};

export default EditForm;
