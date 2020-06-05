import React from "react";
import "./index.css";

function UserList(props) {
  return (
    <table className="user-list-wrapper table">
      <thead className="thead-light">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Company</th>
          <th>Website</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}

export default UserList;
