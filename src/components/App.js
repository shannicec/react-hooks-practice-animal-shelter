import React, { useState } from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
import data from "./db.json"; 

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function handleChangeType(newType) {
    setFilters({ type: newType });
  }

  function handleFindPetsClick() {
    let filteredPets;
    if (filters.type === "all") {
      filteredPets = data.pets; 
    } else {
      filteredPets = data.pets.filter(pet => pet.type === filters.type);
    }
    setPets(filteredPets);
  }

  function handleAdoptPet(id) {
    const updatedPets = pets.map(pet =>
      pet.id === id ? { ...pet, isAdopted: true } : pet
    );
    setPets(updatedPets);
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleChangeType} onFindPetsClick={handleFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;