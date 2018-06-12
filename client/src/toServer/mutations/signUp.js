import gql from 'graphql-tag';

export default gql`
  mutation($fullname: String! $username: String! $email: String! $password1: String! $password2: String!) {
    signUp(fullname: $fullname username: $username email: $email password1: $password1 password2: $password2) {
      token
    }
  }
`