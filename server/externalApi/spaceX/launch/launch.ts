import spaceXAxios from 'server/externalApi/spaceX/spaceXAxios'
import { Launch, PagedLaunch } from 'share/type/launch.types'
import { AxiosResponse } from 'axios'

const getPagedLaunches = async (page: string, limit: string): Promise<PagedLaunch> => {
  return spaceXAxios
    .post<PagedLaunch>('launches/query', {
      query: {},
      options: { page, limit },
    })
    .then((res: AxiosResponse<PagedLaunch>) => res.data)
}

const getLaunch = async (id: string): Promise<Launch> => {
  return spaceXAxios.get<Launch>(`launches/${id}`).then((res: AxiosResponse<Launch>) => res.data)
}

export const LaunchUtil = {
  getPagedLaunches,
  getLaunch,
}
