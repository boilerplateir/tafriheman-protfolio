const typeDefinitions = `

type User {
  id: ID!
  firstname: String
  lastname: String
  email: String
}

input UserInputSignup {
  firstname: String
  lastname: String
  email: String
  password: String
}

input UserInputSignin {
  email: String
  password: String
}

# The schema allows the following queries:
type RootQuery {
  user(id: ID): User
  users: [User]
}

# The schema allows the following mutations:
type RootMutation {
  signup(input: UserInputSignup!): String
  signin(input: UserInputSignin!): String
}

# We need to tell the server which types represent the root query.
# We call them RootQuery and RootMutation by convention.
schema {
  query: RootQuery
  mutation: RootMutation
}
`;

export default typeDefinitions;