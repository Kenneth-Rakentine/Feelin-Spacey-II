import React from 'react'

const SpaceItem = ( { item } ) => {
  return (
    <div className='itemContainer'>
      <h1>ENTER SPACE</h1>
      <h2>{item.title}</h2>
      <img src={item.url} alt='nasa img' />

      <p>{item.explanation}</p>


    </div>
  )
}

export default SpaceItem
