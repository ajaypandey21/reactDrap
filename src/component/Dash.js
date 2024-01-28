import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment"

const Dash = () => {
  const [userData, setuserData] = useState([]);
  const nav = useNavigate()

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/data");
      // console.log(response.data);
      setuserData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/delete/${id}`);
      console.log(`User with ID ${id} deleted successfully`);
      // Wait for the deletion to complete before fetching the updated data
      await getData();
      nav("/dash");

    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>User Data</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Modified</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>{moment(user.createdAt).format('YYYY-MM-DD HH:mm:ss')}</td>
              <td>{moment(user.updatedAt).format('YYYY-MM-DD HH:mm:ss')}</td>
              <td>
                <Link to={`/edit/${user._id}`} className="btn btn-primary mr-2">
                  Edit
                </Link>
                <button
                  onClick={()=>handleDelete(user._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dash;
