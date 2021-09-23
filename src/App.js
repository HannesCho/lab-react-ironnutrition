import './App.css';
import { useState } from 'react';
import allFoods from "./foods.json";
import FoodBox from "./components/FoodBox"
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Divider, Button } from "antd";


function App() {
  const [foods, setFoods] = useState(allFoods);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);
  const [query, setQuery] = useState("");
  const [hideForm, setHideForm] = useState(true)

  const handleSubmit = event => {
    event.preventDefault();
    const newFood = { name, image, calories, servings };
    console.log(newFood);
    setFoods([newFood, ...foods])
    
  }

  const handleNameChange = event => {
    setName(event.target.value)
  }

  const handleImageChange = event => {
    setImage(event.target.value)
  }

  const handleCaloriesChange = event => {
    setCalories(event.target.value)
  }

  const handleServingsChange = event => {
    setServings(event.target.value)
  }

  const deleteFood = foodName => {
    setFoods(foods => foods.filter(food => food.name !== foodName))
  }

  const handleHideBtn = () => setHideForm(true)
  const handleAddBtn = () => setHideForm(false)
  
  return (
    <div className="App">
      { hideForm ? (<Button className="btn" type="primary" ghost onClick={handleAddBtn}>Add New Food</Button>)
        :(<><Divider>Add Food Entry</Divider>
        <AddFoodForm name={name} image={image} calories={calories} servings={servings} 
        handleSubmitProp={handleSubmit} handleNameChangeProp={handleNameChange} 
        handleImageChangeProp={handleImageChange} handleCaloriesChangeProp={handleCaloriesChange} 
        handleServingsChangeProp={handleServingsChange}  />
        <Button className="btn" type="primary" ghost onClick={handleHideBtn}>Hide Form</Button> </>)}
      <Divider>Search</Divider>
      <Search setQueryProp={setQuery}/>
      <Divider>Food List</Divider>
      <FoodBox foods={foods} query={query} deleteFoodProp={deleteFood}/>
    </div>
  );
}

export default App;
