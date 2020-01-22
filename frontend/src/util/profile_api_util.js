import axios from "axios";

// fetch user profile

export const fetchProfile = (userId) => (
  axios.get(`/api/users/${userId}`)
)