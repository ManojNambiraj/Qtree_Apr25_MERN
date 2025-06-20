import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams()

  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    mobile: "",
    age: "",
    password: "",
  });

  useEffect(() => {
    getData();
  },[])

  const getData = async () => {
    const userData = await axios.get(
      `http://localhost:8080/user/user/${id}`
    );

    setUserInput(userData.data.message);
  }

  const handleChange = ({ target: { name, value } }) => {
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, mobile, age, password } = userInput;

    const postData = await axios.put(
      `http://localhost:8080/user/edituser/${id}`,
      { name, email, mobile, age, password }
    );

    if (postData) {
      navigate("/");
    }
  };

  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center" }}>Update User</h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
            onChange={handleChange}
            value={userInput.name}
            autoComplete="off"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={userInput.email}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Mobile
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="mobile"
            value={userInput.mobile}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Age
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="age"
            value={userInput.age}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name="password"
            value={userInput.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
  
export default EditUser
