import {useState} from 'react'

export default function AddFoodForm(props){
    
const [formData, setFormData] = useState({
    name: "",
    image:"",
    calories: 0,
    servings: 0
      })

function handleDataChange(event){
  const {value, name} = event.target

  
  console.log(event.target.value);
  console.log(event.target.name);

const newFoodIOnput = {...formData, [name]: value}
  setFormData(newFoodIOnput)
  
}

function handleSubmit(event){
    event.preventDefault()
    console.log("formData: ", formData)

    props.addFoodForm(formData)

    setFormData({
        name:"",
        image: "",
        calories: 0,
        servings: 0
    })


}

return(

    <div className="AddFood">
        <h4>Add a Food</h4>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleDataChange}/>
  
          <label>Image:</label>
          <input type="text" name="image" value={formData.image} onChange={handleDataChange} />
  
          <label>Calories:</label>
          <input type="number" name="calories" value={formData.calories} onChange={handleDataChange} />
  
          <label>Serving:</label>
          <input type="number" name="servings"  value={formData.servings} onChange={handleDataChange} />

          <button type="submit">Add a Food</button>
        </form>
    </div>
    )
}