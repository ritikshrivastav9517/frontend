import React from "react";
import { useNavigate } from "react-router-dom";
import "./managemnts.css";

export const Blog = () => {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate("/create-customer");
  };

  return (
    <div>
      <div className="container">
        <div className="card">
          <h1>Create Campaigns</h1>
          <button onClick={handleCreateClick}>Create</button>
        </div>

        <div className="card">
          <h1>Campaigns log</h1>
          <button onClick>show</button>
        </div>
      </div>
    </div>
  );
};
