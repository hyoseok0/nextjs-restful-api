import React, { useEffect, useState } from 'react'
import { Launch, PagedLaunch } from 'share/type/launch.types'
import axios from 'axios'
import { Button } from 'primereact/button'
import Launches from 'components/Launches/Launches'

const LIMIT = 10

const LaunchesPage = () => {
  const [page, setPage] = useState<number>(1)
  const [launchesState, setLaunchesState] = useState<{
    launches: Launch[]
    hasNextPage: boolean
  }>({
    launches: [],
    hasNextPage: false,
  })

  useEffect(() => {
    const getLaunches = async () => {
      const response = await axios.get<PagedLaunch>('/api/launches', {
        params: {
          page,
          limit: LIMIT,
        },
      })
      setLaunchesState((prevState) => ({
        launches: page === 1 ? response?.data?.docs : [...prevState.launches, ...response?.data?.docs],
        hasNextPage: response?.data?.hasNextPage,
      }))
    }
    getLaunches()
  }, [page])

  return (
    <>
      <h2>Space Explorer</h2>
      <div>
        <Launches launches={launchesState.launches} />
      </div>
      {launchesState?.hasNextPage && <Button label='더보기' onClick={() => setPage((prevState) => prevState + 1)} />}
    </>
  )
}

export default LaunchesPage
