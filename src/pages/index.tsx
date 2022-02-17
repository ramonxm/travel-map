import HomeTemplate from 'templates/Home'
import { MapProps } from 'components/Map'
import client from 'graphql/client'
import { getPlaces } from 'graphql/queries'
import { GetPlacesQuery } from 'graphql/generated/graphql'

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(getPlaces)

  return {
    props: {
      places
    }
  }
}
