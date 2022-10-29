import React from 'react'

const List = (props) => {
    const list = props.list

  return (
    <div>
       {
        list.map((input, i) => {
            return (
                <ul key={i}>
                    <li>{input}</li>
                </ul>
            )       
        })
       }
    </div>
  )
}

export default List