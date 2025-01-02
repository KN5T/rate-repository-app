import { gql } from "@apollo/client"

export const GET_REPOSITORIES = gql`
  query Repositories($searchKeyword: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $after: String, $first: Int) {
    repositories(searchKeyword: $searchKeyword, orderBy: $orderBy, orderDirection: $orderDirection, after: $after, first: $first) {
      totalCount
      edges {
        node {
          name
          fullName
          ratingAverage
          stargazersCount
          forksCount
          ownerAvatarUrl
          description
          language
          reviewCount
          id
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        startCursor
      }
    }
  }
`

export const GET_REPOSITORY = gql`
  query repository($repositoryId: ID!, $after: String, $first: Int) {
    repository(id: $repositoryId) {
      description
      forksCount
      fullName
      id
      language
      reviewCount
      ratingAverage
      stargazersCount
      url
      ownerAvatarUrl
      reviews(after: $after, first: $first) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
          startCursor
        }
      }
    }
  }
`

export const GET_USER = gql`
  query getUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            text
            rating
            createdAt
            user {
              username
            }
            repository {
              name
              ownerName
              id
            }
            id
          }
        }
      }
    }
  }
`
