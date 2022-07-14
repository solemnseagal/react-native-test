import { gql } from "@apollo/client";

export const getHouses = gql`
  query Houses {
    houses @rest(type: "House", path: "houses") {
      name
      region
      coatOfArms
    }
  }
`;
