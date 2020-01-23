import axios from 'axios';

export const fetchSurfSpots = () => {
    return axios.get('/api/spots/')
};

export const createSurfSpot = (surfSpotData) => {
    return axios.post('/api/spots/', surfSpotData);
};

export const fetchSurfSpot = (surfSpotId) => {
    return axios.get(`/api/spots/${surfSpotId}`);
};

export const deleteSurfSpot = (surfSpotId) => {
    return axios.delete(`/api/spots/${surfSpotId}`);
};

export const updateSurfSpot = (surfSpotData) => {
    return axios.delete(`/api/spots/${surfSpotData.id}`)
};