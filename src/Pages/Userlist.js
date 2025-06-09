import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Userlist() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const userData = await axios.get(
      "https://683db832199a0039e9e69fec.mockapi.io/EMP"
    );

    setDatas(userData.data);
  };

  const handleDelete = async (id) => {
    const deletedData = await axios.delete(
      `https://683db832199a0039e9e69fec.mockapi.io/EMP/${id}`
    );

    if(deletedData){
      getUsers()
    }
  }

  return (
    <div>
      <Link to={"/create"} className="btn btn-primary m-4">
        Create User
      </Link>

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Password</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((item) => {
            return (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.password}</td>
                <td>
                  <Link
                    to={`/edit/${item.id}`}
                    className="btn btn-success btn-sm"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {handleDelete(item.id)}}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Userlist;
