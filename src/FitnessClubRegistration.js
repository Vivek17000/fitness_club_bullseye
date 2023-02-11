import React, { useState } from "react";
import MemberDetails from "./MemberDetails";
import fitness from "./fitness.css"

function FitnessClubRegistration() {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const member = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      phoneNumber: form.elements.phoneNumber.value,
      address: form.elements.address.value,
    };
    setMembers([...members, member]);
  };

  const handleViewMember = (member) => {
    setSelectedMember(member);
  };

  return (
    <div class="fitness">
      {selectedMember ? (
        <MemberDetails member={selectedMember} />
      ) : (
        <form onSubmit={handleSubmit}>
          <h1 class="h">Fitness Club Registration</h1>
          <input class="bo" type="text" name="name" placeholder="Name" />
          <input class="bo" type="email" name="email" placeholder="Email" />
          <input  class="bo" type="text" name="phoneNumber" placeholder="Phone Number" />
          <input class="bo" type="text" name="address" placeholder="Address" />
          <button class="bo but" onClick={()=> {alert("User Added Succesfully")}}type="submit">Add Member</button>
          <button class="bo but" onClick={() => handleViewMember(members[0])}>
            View Member List
          </button>
        </form>
      )}
    </div>
  );
}

export default FitnessClubRegistration;
