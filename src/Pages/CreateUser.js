import React, { useState } from "react";
import "./CreateUser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {

  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    mobile: "",
    age: "",
    password: ""
  })

  const handleChange = ({target: {name, value}}) => {
    setUserInput({...userInput, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const {name, email, mobile, age, password} = userInput

    const postData = await axios.post(
      "https://683db832199a0039e9e69fec.mockapi.io/EMP",
      { name, email, mobile, age, password }
    );

    if(postData){
      navigate("/")
    }
  }

  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center" }}>User Registration</h1>
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

export default CreateUser;
