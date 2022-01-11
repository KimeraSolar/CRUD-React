import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import CreateUser from "./Components/CreateUser";
import UsersList from "./Components/UsersList";
import UpdatePassword from "./Components/UpdatePassword";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <CreateUser />
      <UpdatePassword />
      <UsersList />
    </ApolloProvider>
  );
}

export default App;
