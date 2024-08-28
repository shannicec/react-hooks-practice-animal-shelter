import React from "react";

function Filters({ onChangeType, onFindPetsClick }) {
  function handleSelectChange(event) {
    onChangeType(event.target.value); 
  }

  function handleFindPetsClick() {
    onFindPetsClick(); 
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" aria-label="type" onChange={handleSelectChange}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button" onClick={handleFindPetsClick}>
          Find pets
        </button>
      </div>
    </div>
  );
}

export default Filters;