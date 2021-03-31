const { gql } = require("apollo-server");

// schemas are written here , written with GraphQl SDL
const typeDefs = gql`
  #schema. ! nmeans field can never be null

  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }
`;

module.exports = typeDefs;
