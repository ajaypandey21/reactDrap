import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dash = () => {
  const [userData, setuserData] = useState([]);

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
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>
            <Link to={`/edit/${user._id}`} className="btn btn-primary mr-2">
              Edit
            </Link>
            {/* <button onClick={() => handleDelete(user._id)} className="btn btn-danger">
              Delete
            </button> */}
          </td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dash;

