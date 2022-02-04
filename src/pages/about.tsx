import client from 'graphql/client'
import { getPages } from 'graphql/queries'
import AboutTemplate from 'templates/About'

export default function AboutPage() {
  return <AboutTemplate />
}

export const getStaticProps = async () => {
  const data = await client.request(getPages)

  console.log(data)

  return {
    props: {}
  }
}
