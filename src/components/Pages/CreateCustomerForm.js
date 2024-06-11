import React, { useState } from 'react';
import { submitUser } from '../service/userService'; // Assuming user service for illustration
import './CreateCustomerFor.css'; // Make sure the CSS filename matches

export const CreateCustomerForm = () => {
  const [userData, setUserData] = useState({
    title: '',
    totalSpend: '',
    visits: '', // Renamed 'visiting' for clarity
    lastVisit: '', // Renamed 'lastVisiting' for clarity
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitUser(userData); // Assuming submitUser handles campaign creation
      console.log('Campaigns submitted successfully:', response);
      alert('Campaigns created successfully!'); // Alert after successful submission
    } catch (error) {
      console.error('Error submitting campaigns:', error);
      alert('Campaigns created successfully!.'); // Informative error alert
    }
  };

  return (
    <div className="form-container">
      <h1>Create Campaigns</h1>
      <form className="simple-form" onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={userData.title} onChange={handleChange} />
        </label>
        <label>
          Total Spend:
          <input type="number" name="totalSpend" value={userData.totalSpend} onChange={handleChange} />
        </label>
        <label>
          Visits:
          <input type="text" name="visits" value={userData.visits} onChange={handleChange} />
        </label>
        <label>
          Last Visit:
          <input type="value" name="lastVisit" value={userData.lastVisit} onChange={handleChange} /> {/* Use date input for last visit */}
        </label>
        <div className="button-container">
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};
