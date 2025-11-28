import React from "react";

const Jumbotron = () => {
  return (
    <div className="card mb-3 bg-secondary-subtle border-0">
      <div className="card-body d-flex flex-column align-items-start">
        <h1 className="card-title">Welcome to anime cards!</h1>
        <p className="card-text text-start mb-0">Here you can find all your anime by name!, see their descriptions, how many episodes have been released, and much more!</p>
        <p className="card-text text-start">Click the button below to search for them individually</p>
        <button type="button" class="btn btn-primary mb-3 ">Find your favorite!</button>
      </div>
    </div>
  )
}

export default Jumbotron;