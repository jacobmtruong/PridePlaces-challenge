import {useState} from 'react'
import List from '../components/List'

const FormInput = () => {
  const [input, setInput] = useState("")

  const [list, setList] = useState([])

  const inputSubmit = (e) => {
    e.preventDefault() 
    if (input.length === 0) //if input is empty then do nothing
      return;
    else {
      setList ([...list, input]) //push new input into list array
      setInput('') // set input back to empty state
    }
  }
  

  return (
    <>
      <fieldset>
        <legend>Input Form</legend>
          <h1>Please enter your input</h1>
          <form onSubmit={inputSubmit}>
            <input type="text" onChange={(e) => setInput(e.target.value)} value={input}/>
            <button>Add</button>
          </form>
      </fieldset>
      
      <fieldset >
        <legend>Array</legend>
        {
          JSON.stringify(list)
        }
      </fieldset>

    <List list={list}/>
    </>
  )
}

export default FormInput