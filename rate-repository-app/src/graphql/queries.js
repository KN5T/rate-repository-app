import { gql } from "@apollo/client"

export const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
      totalCount
      edges {
        node {
          name
          name
          fullName
          ratingAverage
          stargazersCount
          forksCount
          ownerAvatarUrl
          description
          language
          reviewCount
        }
      }
    }
  }
`

export const GET_USER = gql`
  query User {
    me {
      id
      username
    }
  }
`
