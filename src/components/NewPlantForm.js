import React, { useState }from "react";

function NewPlantForm({newPlant}) {
  const [formData, setFormData] = useState (
    //set this formData to be initiall an empty object so
    //make empty object - abstracting?? 
    //well not an empty object BUT object with the keys we want with EMPTY values
    {
      "id": "",
      "name": "",
      "image": "",
      "price": ""
    }
  )
  // {
  //   "id": 1,
  //   "name": "Aloe",
  //   "image": "./images/aloe.jpg",
  //   "price": 15.99
  // }

  //now add one function to handle all onCHange form
  function handleOnChangeForm(e) {
    //console.log(formData)
    //use setFormData and create new object - spread operator here - then! the key poinst to name of target [] = differentiate 
    //then that key points to the e.target.value (the value) 
    setFormData({...formData, [e.target.name]:e.target.value})
    //use spreadoperator to get copy of what is on the actual form
    //then with e.target.name(name = name, image, price) we assign the new value to that
}

//so on input onChange we want to trigger the onChange when we add values to the object keys - update with whatever data we enter
function handleSubmitForm (e) {
  e.preventDefault()
  newPlant(formData)
}  

//onSubmit has to go on ACTUAL FORM
return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {handleSubmitForm}>
        <input onChange={handleOnChangeForm} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleOnChangeForm} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleOnChangeForm} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
