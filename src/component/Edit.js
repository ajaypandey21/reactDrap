import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const { id } = useParams();
  useEffect(() => {
    getData();
  }, [id]);
  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3001/update/${id}`, data);

      // Redirect to /dash
      navigate("/dash");
    } catch (error) {
      console.error("Error updating user:", error);
      // Handle the error as needed (e.g., show a message to the user)
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/user/${id}`);
      const userData = await response.data;
      setData(userData);

      // return userData; // Return the fetched data if needed
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error as needed (e.g., show a message to the user)
    }
  };
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  value={data.name || ""}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  value={data.username || ""}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  value={data.email || ""}
                  onChange={handleChange}
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  value={data.password || ""}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                />
              </div>

              <button
                type="button"
                onClick={handleUpdate}
                className="btn btn-primary"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
