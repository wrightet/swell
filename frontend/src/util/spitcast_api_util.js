import axios from 'axios';

//fetch nearby surf spots
export const fetchNearbySpots = (coordinates) => {
  const [lat, long] = coordinates
  const url = `http://api.spitcast.com/api/spot/nearby?longitude=${long}&latitude=${lat}`
  return axios.get(url)
}

//fetch spot forecast
export const fetchForecast = (spotId) => {
  const url = `http://api.spitcast.com/api/spot/forecast/${spotId}`;
  return axios.get(url)
}

//fetch all spitcast spots
export const fetchSpitCastSpots = (long, lat) => (
  axios.post(`/api/spitcast/`, {long, lat})
    .then(res => res.data)
)
