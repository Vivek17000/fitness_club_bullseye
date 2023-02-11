import React from "react";

function MemberDetails({ member }) {
  return (
    <div class="hello">
      <h1 class="h">Member Details</h1>
      <p class="h">Name: {member.name}</p>
      <p class="h">Email: {member.email}</p>
      <p class="h">Phone Number: {member.phoneNumber}</p>
      <p class="h mar">Address: {member.address}</p>
    </div>

    // <table>
    // <thead>
    //   <tr>
    //     <th>Name</th>
    //     <th>Email</th>
    //     <th>Phone Number</th>
    //     <th>Address</th>
    //   </tr>
    // </thead>
    // <tbody>
    //   {member.map((members, index) => (
    //     <tr key={index}>
    //       <td>{members.name}</td>
    //       <td>{members.email}</td>
    //       <td>{members.phoneNumber}</td>
    //       <td>{members.address}</td>
    //     </tr>
    //   ))}
    // </tbody>
    // </table>
  );
}

export default MemberDetails;


  