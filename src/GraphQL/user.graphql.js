export const GET_ALL_USER = `
  {
    users {
      id
      name
      company
      website
      email
      address {
        city
      }
    }
  }
`;

export const CREATE_USER = `
mutation createUser($name: String!, $company: String!,$website: String!,$email: String!) {
  createUser(input:{
    name:$name,
    company:$company,
    website:$website,
    email:$email,
    }){
    name
    company
    website
    email
   }
} 
`;
