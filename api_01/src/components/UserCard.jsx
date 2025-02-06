import React from "react";

const UserCard = (props) => {
  console.log(props.data);
  return (
    <div className="user-card">
        <img style={{borderRadius: '50%'}} src={props.data.picture.large} alt="" />
      <h3>{props.data.name.first}</h3>
      <p>{props.data.phone}</p>
      <p>
        {props.data.location.city},{props.data.location.state},
        {props.data.location.country}
      </p>
    </div>
  );
};

export default UserCard;
