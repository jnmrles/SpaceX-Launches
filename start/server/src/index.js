require("dotenv").config();

const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

// creates new instance of ApolloServer and passes imported schema
const server = new ApolloServer({ typeDefs });
