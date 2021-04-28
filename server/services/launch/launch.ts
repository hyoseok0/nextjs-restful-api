import { spaceXAxios } from 'server/axios'
import { Launch } from './launch.types'

const getAllLaunches = async () => {
  return spaceXAxios.get<Launch[]>('launches').then((res: any) => res.data)
}

const getPagedLaunches = async (page: string, limit: string) => {
  return spaceXAxios
    .post<Launch[]>('launches/query', {
      query: {},
      options: { page, limit },
    })
    .then((res: any) => res.data)
}

const getLaunch = async (id: string) => {
  return spaceXAxios.get<Launch>(`launches/${id}`).then((res: any) => res.data)
}

export const LaunchUtil = {
  getAllLaunches,
  getPagedLaunches,
  getLaunch,
}
