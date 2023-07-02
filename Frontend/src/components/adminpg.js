import React, { useState } from "react";

const AdminPage = () => {
  const [toggleState, setToggleState] = useState(false);

  const tableData = [
    {
      id: 1,
      name: "John Doe",
      phone: "123-456-7890",
      email: "john@example.com",
      language: "English",
      qualification: "Bachelor's Degree",
      availability: "Full-time",
    },
    // Add more data objects as needed
  ];

  const handleToggle = (id) => {
    // Update the toggle state for the corresponding row
    setToggleState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Admin Page
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Users
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-4">
        <h2>Mentor Details</h2>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Language</th>
              <th>Qualification</th>
              <th>Availability</th>
              <th>Verified</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.language}</td>
                <td>{item.qualification}</td>
                <td>{item.availability}</td>
                <td>
                  <button
                    className={`btn btn-sm ${
                      toggleState[item.id] ? "btn-success" : "btn-danger"
                    }`}
                    onClick={() => handleToggle(item.id)}>
                    {toggleState[item.id] ? "Verified" : "Not verified"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;