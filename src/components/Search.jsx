import React from 'react'

const search = ({SearchTerm, setSearchTerm}) => {
  
  return (
    <div className='search'>
      <div>
        <img src="search.svg" alt="search" />

        <input
         type="text" 
         placeholder='search through thousands of movies'
         value={SearchTerm}
         onChange={(event) => setSearchTerm(event.target.value)}
         />
      </div>
    </div>
  )
}

export default search