import React from "react";
import { GET_ALL_USERS } from "../Graphql/Queries";
import { DELETE_USER } from "../Graphql/Mutations";
import { useMutation, useQuery } from "@apollo/client";

function UsersList() {
  const { data } = useQuery(GET_ALL_USERS);

  const [deleteUser] = useMutation(DELETE_USER);

  return (
    <div className="usersList">
      <h5>Users</h5>
      <ul>
        {data &&
          data.getAllUsers.map((user) => {
            const { id, name, username } = user;
            return (
              <>
                <li key={id}>
                  {name} - {username}{" "}
                  <button
                    onClick={() => {
                      deleteUser({
                        variables: { id },
                      });
                    }}
                  >
                    Delete
                  </button>
                </li>
              </>
            );
          })}
      </ul>
    </div>
  );
}

export default UsersList;
