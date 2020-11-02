import React from "react";

function TableHeader({
  first,
  second,
  third,
  fourth,
  fived,
  sixed,
  seventh,
  eighth,
}) {
  return (
    <thead>
      <tr>
        <th scope="row"></th>
        <td>
          <strong>{first}</strong>
        </td>
        <td>
          <strong>{second}</strong>
        </td>
        <td>
          <strong>{third}</strong>
        </td>
        <td>
          <strong>{fourth}</strong>
        </td>
        <td>
          <strong>{fived}</strong>
        </td>
        <td>
          <strong>{sixed}</strong>
        </td>
        <td>
          <strong>{seventh}</strong>
        </td>
        <td>
          <strong>{eighth}</strong>
        </td>
      </tr>
    </thead>
  );
}

export default TableHeader;
