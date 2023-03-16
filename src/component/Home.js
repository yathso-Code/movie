import React, { useContext } from 'react'
import  Search from './Search'
import Movie from './Movie'

function Home() {
 
  return (
    <div>
      <Search/>
      <Movie/>   
    </div>
  )
}

export default Home