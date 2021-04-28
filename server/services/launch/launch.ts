import { spaceXAxios } from 'server/axios'
import { Launch } from './launch.types'
import { AxiosResponse } from 'axios'

const getAllLaunches = async () => {
  return spaceXAxios.get<Launch[]>('launches').then((res: AxiosResponse<Launch[]>) => res.data)
}

const getPagedLaunches = async (page: string, limit: string) => {
  return spaceXAxios
    .post<Launch[]>('launches/query', {
      query: {},
      options: { page, limit },
    })
    .then((res: AxiosResponse<Launch[]>) => res.data)
}

const getLaunch = async (id: string) => {
  return spaceXAxios.get<Launch>(`launches/${id}`).then((res: AxiosResponse<Launch>) => res.data)
}

export const LaunchUtil = {
  getAllLaunches,
  getPagedLaunches,
  getLaunch,
}
