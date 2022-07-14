import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const restLink = new RestLink({
  uri: "https://anapioficeandfire.com/api/",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
});
