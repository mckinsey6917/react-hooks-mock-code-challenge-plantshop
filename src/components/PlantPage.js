import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  //set up state locally to store plants = array of objects

  const [showPlants, setShowPlants] = useState([])
  const [filterPlants, setFilterPlants] = useState(showPlants)

  function handleSearch (e) {
    let filterPlantsList = showPlants.filter(plant => {
      return plant.name.includes(e.target.value)
    })
    //then add to setter function - setting state to the new filterPlantsList
    setFilterPlants(filterPlantsList)
  }
function newPlant (addPlant) {

  const showNewPlant = [...showPlants, addPlant]
}

  useEffect(() => { 
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
   // .then(data => console.log(data)) to check if we are fetching the correct data
   .then(data => {setShowPlants(data)
   //also add filter plants to data
   setFilterPlants(data)})
  }, [])




  return (
    <main>
      <NewPlantForm newPlant ={newPlant} />
      <Search handleSearch={handleSearch} />
      <PlantList plants={filterPlants} />
    </main>
  );
}

export default PlantPage;
