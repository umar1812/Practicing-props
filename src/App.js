import React from "react";

const Profile = (props) => {
  return (
    <div className="box">
      <img src={props.employee.profileImg} alt="" />
      <h1>{props.employee.name}</h1>
      <div className="pre">Location</div>
      <div><h3>{props.employee.location}</h3></div>
      <div className="pre">Blood Group</div>
      <div><h3>{props.employee.bloodGroup}</h3></div>
      <div className="pre">Age</div>
      <div><h3>{props.employee.age}</h3></div>
    </div>
  )
}

export default Profile;