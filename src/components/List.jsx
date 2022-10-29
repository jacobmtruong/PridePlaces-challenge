import React from 'react'

const List = (props) => {
    const list = props.list

  return (
    <div>
      <fieldset>
        <legend>List</legend>
       {
        list.map((input, i) => {
            return (
                <ul key={i}>
                    <li>{input}</li>
                </ul>
            )       
        })
       }
        </fieldset>
    </div>
  )
}

export default List