import {useState} from "react"

export default function SearchFood(props){
    const [word, setWord] = useState("")

    function handleChange(e){
        const value=e.target.value
        setWord(value)
        
        props.filterWord(value)
    }
    return(
        <div>
            <label>Search Food:</label>
            <input type="text" name="name" value={word} onChange={handleChange}/>
        </div>

    )
}