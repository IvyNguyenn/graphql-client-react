import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import UserPage from "./UserPage";

const client = new ApolloClient({
  uri: "http://localhost:4000",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        My first Apollo app 🚀
      </h1>
      <UserPage />
    </ApolloProvider>
  );
}

export default App;
