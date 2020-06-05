import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
// import { gql } from "apollo-boost";
import gql from "graphql-tag";
import UserList from "./UserList";
import UserItem from "./UserItem";
import { GET_ALL_USER, CREATE_USER } from "../GraphQL/user.graphql";

function UserPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const { loading, error, data } = useQuery(gql(GET_ALL_USER));
  const [createUser, { addData }] = useMutation(gql(CREATE_USER));

  const onSubmitUser = (e) => {
    e.preventDefault();
    createUser({ variables: { name, company, website, email } });
  };

  if (loading) return <h4>Loading ...</h4>;
  if (error) return <h4>Error ...</h4>;
  console.log(addData);

  return (
    <>
      <form onSubmit={onSubmitUser}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company"
          name="company"
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          placeholder="Website"
          name="website"
          onChange={(e) => setWebsite(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" value="Add User" />
        <br />
      </form>
      <UserList>
        {data.users.map((user, index) => (
          <UserItem user={user} key={index} />
        ))}
      </UserList>
    </>
  );
}

export default UserPage;
