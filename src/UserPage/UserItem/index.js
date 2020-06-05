import React from "react";

function UserItem(props) {
  return (
    <tr>
      <th>{props.user.id}</th>
      <th>{props.user.name}</th>
      <th>{props.user.company}</th>
      <th>{props.user.website}</th>
      <th>{props.user.email}</th>
      <th>{props.user.address ? props.user.address.city : ""}</th>
    </tr>
  );
}

export default UserItem;
