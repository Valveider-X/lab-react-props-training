import React from "react";

function IdCard(props) {
  return (
    <div id="paco">
        <img className="foto" src={props.picture} ></img>
        <div id="parrafos">
      <p><b>Last Name: </b>{props.lastName}</p>
      <p><b>First Name: </b>{props.firstName}</p>
      <p><b>Gender: </b>{props.gender}</p>
      <p><b>Height: </b>{props.height}</p>
      <p><b>birth: </b>{props.birth}</p>
      </div>
     

    </div>
  );
}

export default IdCard;
