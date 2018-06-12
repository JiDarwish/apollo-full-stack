import { gql } from 'apollo-server';
import userType from './userType';
import authPayloadType from './authPayloadType';

const rootQueryMutation = gql`
  type Query {
    me: User
  }

  type Mutation {
    signUp(username: String! fullname: String! email: String! password1: String! password2: String!): AuthPayload
    login(username: String! password: String!): AuthPayload
  }
`;

export default [userType, authPayloadType, rootQueryMutation];