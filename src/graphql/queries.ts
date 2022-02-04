import { gql } from 'graphql-request'

export const getPages = gql`
  query getPages {
    pages {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`
