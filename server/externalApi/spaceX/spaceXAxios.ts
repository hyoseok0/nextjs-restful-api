import axios from 'axios'

// https://github.com/r-spacex/SpaceX-API
const spaceXAxios = axios.create({
  baseURL: `https://api.spacexdata.com/v4/`, // 참고) test, beta, stage, production api 서버가 분리된 경우, environment variable 에 따라 baseURL 을 다르게 설정합니다.
  timeout: 3000,
})

export default spaceXAxios
