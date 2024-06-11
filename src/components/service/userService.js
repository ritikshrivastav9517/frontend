// frontend/src/services/userService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/create';

export const submitUser = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);
    return response.data;
  } catch (error) {
    console.error('Error submitting user:', error);
    throw error;
  }
};
