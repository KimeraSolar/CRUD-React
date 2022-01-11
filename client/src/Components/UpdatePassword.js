import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { UPDATE_PASSWORD } from "../Graphql/Mutations";

function UpdatePassword() {
  const [username, setUsername] = useState(" ");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [updatePassword] = useMutation(UPDATE_PASSWORD);

  return (
    <div className="updatePassword">
      <h5>Update password</h5>
      <input
        type={"text"}
        placeholder="username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type={"password"}
        placeholder="password"
        onChange={(event) => setOldPassword(event.target.value)}
      />
      <input
        type={"password"}
        placeholder="new password"
        onChange={(event) => setNewPassword(event.target.value)}
      />
      <button
        onClick={() => {
          updatePassword({
            variables: {
              username: username,
              oldPassword: oldPassword,
              newPassword: newPassword,
            },
          });
        }}
      >
        Update password
      </button>
    </div>
  );
}

export default UpdatePassword;
