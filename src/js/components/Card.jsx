import React from "react";

const Card = (props) => {
  const { image, title, description } = props.cards;
    return (
        <div className="card " >
  <img src={image} style={{ height: '200px', objectFit: 'cover' }} className="card-img-top" alt={title}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="#" className="btn btn-primary">Find out more</a>
  </div>
</div>
    )
}

export default Card;