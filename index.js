var gql = require('gql')

module.exports = gql.or([
  gql.exact('rs4988235', 'CT'),
  gql.only('rs4988235', 'T'),
  gql.exact('rs182549', 'CT'),
  gql.only('rs182549', 'T')
])