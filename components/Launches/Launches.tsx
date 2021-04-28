import { Launch } from 'share/type/launch.types'
import { Card } from 'primereact/card'
import Link from 'next/link'
import React from 'react'

interface Props {
  launches: Launch[]
}

const Launches = ({ launches }: Props) => {
  return (
    <>
      {launches?.map((launch: Launch) => (
        <Link key={launch.id} href={'/launches/[id]'} as={`/launches/${launch.id}`}>
          <a>
            <Card title={launch.name} style={{ width: '25rem', marginBottom: '2em' }}>
              <p>{launch.details}</p>
              <p>{launch.date_utc}</p>
            </Card>
          </a>
        </Link>
      ))}
    </>
  )
}

export default Launches
