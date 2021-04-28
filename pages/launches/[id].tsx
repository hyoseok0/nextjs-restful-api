import { Launch } from 'share/type/launch.types'
import { Card } from 'primereact/card'
import React from 'react'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import axios from 'axios'

interface Props {
  launch: Launch
}

const LaunchDetail = ({ launch }: Props) => {
  if (!launch) {
    return null
  }
  return (
    <>
      <h2>LaunchDetail</h2>
      <Card
        title={launch.name}
        style={{ width: '45rem', marginBottom: '2em' }}
        header={<img src={launch.links.patch.small} />}
      >
        <p>{launch.details}</p>
        <p>{launch.date_utc}</p>
      </Card>
    </>
  )
}

export default LaunchDetail

interface LaunchDetailServerSideProps {
  launch?: Launch | null
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<LaunchDetailServerSideProps>> => {
  const { id } = context.query
  const response = await axios.get<Launch>(`http://127.0.0.1:3000/api/launches/${id}`)

  return {
    props: {
      launch: response?.data,
    },
  }
}
