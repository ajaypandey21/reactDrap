import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const nav = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormdata) => ({
          ...prevFormdata,
          [name]: value,
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        axios({
          method: "post",
          url: "http://localhost:3001/signup",
          data: formData,
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            // Handle the response from the server
            console.log("Success:", response.data);
            nav("/dash")
          })
          .catch((error) => {
            // Handle errors during the request
            console.error("Error:", error);
          });
      };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup

