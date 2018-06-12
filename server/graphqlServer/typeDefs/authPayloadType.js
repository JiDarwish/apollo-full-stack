import { gql } from 'apollo-server';

export default gql`
  type AuthPayload {
    success: Boolean
    errors: [String]
  }
`;