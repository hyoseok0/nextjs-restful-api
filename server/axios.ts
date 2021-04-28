import axios from 'axios'

// https://github.com/r-spacex/SpaceX-API
export const spaceXAxios = axios.create({
  baseURL: `https://api.spacexdata.com/v4/`,
  timeout: 3000,
})
