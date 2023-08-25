import React from 'react'



const SpaceItem = ( { item } ) => {
  return (
    <div className='itemContainer'>
      <h1>ENTER SPACE</h1>
      <h2>{item.title}</h2>
      <img src={item.url} alt='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/800px-No-Image-Placeholder.svg.png'/>

      <p>{item.explanation}</p>

      {/* <button onClick={handleGoBack}>Go Back</button> */}
    </div>
  )
}

export default SpaceItem
