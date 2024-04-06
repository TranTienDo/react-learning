import React from 'react'

export default function Filter(props) {
    var handleFilterByName = props.handleFilterByName
    var handleFilterByMaxPrice = props.handleFilterByMaxPrice
    var handleFilterByMinPrice = props.handleFilterByMinPrice
  return (
   <div classname="well well-small">
        <input type="text" placeholder="Filler"  onChange={handleFilterByName}/>
       Max: <input type="text" placeholder="Filler"  onChange={handleFilterByMaxPrice}/>
       Min: <input type="text" placeholder="Filler"  onChange={handleFilterByMinPrice}/>


    </div>

  )
}
