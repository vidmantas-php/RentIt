import React from "react";

function TableData({
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
    <tr>
      <th scope="row"></th>
      <td>{first}</td>
      <td>{second}</td>
      <td>{third}</td>
      <td>{fourth}</td>
      <td>{fived}</td>
      <td>{sixed}</td>
      <td>
        <div className="message__border__radius active__background__color">
          {seventh}
        </div>
      </td>
      <td>{eighth}</td>
    </tr>
  );
}

export default TableData;
