import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card" onClick={() => props.cardShuffle()}>
      <div onClick={() => props.imageClick(props.id)} className="img-container">
        <img id={props.id} alt={props.name} src={props.image} />
      </div>
    </div>
  );
}
export default ImageCard;
