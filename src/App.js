import logo from "./logo.svg";
import "./App.css";
import foodsArray from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import SearchFood from "./components/SearchFood";

function App() {
  const [foodsData, setFoodsData] = useState(foodsArray); // All the DB
  const [foods, setFoods] = useState(foodsArray); //  copy of DB to work with/ manipulate (aca no voy a filtrar)

  function addFoodForm(newFood) {
    console.log(newFood);

    setFoods([newFood, ...foods]);
    setFoodsData([newFood, ...foodsData]);
  }

  function searchWord(str) {
    let filteredFoods = foodsData.filter((food) => {
      console.log(food.name.toLowerCase().includes(str.toLowerCase()));
      return food.name.toLowerCase().includes(str.toLowerCase());
    });
    console.log(filteredFoods);
    setFoods(filteredFoods);
  }

  function deleteF(foodToDelete) {
    const toDelete = foodsData.filter((food) => food !== foodToDelete);
    setFoodsData(toDelete);
    setFoods(toDelete);
  }

  function toggleForm() {
    document.getElementById("addNewFoodDiv").classList.toggle("hidden");
    document.getElementById("addNewFoodBtn").classList.toggle("hidden");
  }

  return (
    <div className="App">
      <SearchFood filterWord={searchWord} />
      <button id="addNewFoodBtn" onClick={() => toggleForm()}>
        Add New Food
      </button>
      <div id="addNewFoodDiv" className="hidden">
        <AddFoodForm addFoodForm={addFoodForm} />
        <button onClick={() => toggleForm()}>Hide This</button>
      </div>

      {foods.length ? (
        foods.map((food, idx) => (
          <div key={food.name + `${idx}`}>
            <FoodBox food={food} deleteF={deleteF} />
            {/* <p> {food.name} </p>
            <img src={food.image} alt="pic" width="100" /> */}
          </div>
        ))
      ) : (
        <div id="noMoreContent">
          <p>Oops There is no more content to show!</p>
          <img src="../Empty.png" alt="pic" width="240" height="200" />
        </div>
      )}
    </div>
  );
}

export default App;
