// surf session api util
import axios from "axios"

// fetch all surf sessions
export const fetchSurfSessions = (userId) => (
    axios.get(`/api/users/${userId}/sessions`)
);

// create a session
export const createSurfSession = (userId, sessionData) => {
   
    return(axios.post(`/api/users/${userId}/sessions`, sessionData))
    
}

// delete a session
export const deleteSurfSession = (userId, ssId) => (
    axios.delete(`/api/users/${userId}/sessions/${ssId}`)
)
