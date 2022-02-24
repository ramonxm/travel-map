import { gql } from 'graphql-request'

export const getPages = gql`
  query getPages($first: Int) {
    pages(first: $first) {
      id
      heading
      slug
      body {
        html
        text
      }
    }
  }
`

export const getPagesBySlug = gql`
  query getPagesBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        html
        text
      }
    }
  }
`

export const getPlaces = gql`
  query getPlaces($first: Int) {
    places(first: $first) {
      id
      slug
      name
      location {
        latitude
        longitude
      }
      description {
        html
        text
      }
      gallery {
        url
        height
        width
      }
    }
  }
`

export const getPlaceBySlug = gql`
  query getPlaceBySlug($slug: String!) {
    place(where: { slug: $slug }) {
      id
      slug
      name
      location {
        latitude
        longitude
      }
      description {
        html
        text
      }
      gallery {
        url
        height
        width
      }
    }
  }
`
