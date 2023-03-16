import React from 'react'
import { useGlobalContext } from './context';
import './Search.css';

function Search() {
  const {setQuery, isError, isLoading}= useGlobalContext();

  return (
    <>
    <form action='#' onSubmit={(e)=> e.preventDefault()}>
    <div className='search_box'>
      <h3>Search Your Favourite Movie..</h3>
      <div className='input_box'>
       
      <input type="text" 
            placeholder="search movie" 
            onChange={(e) => setQuery(e.target.value)}/>
      </div>
      <div>
        <p style={{color: "red",fontSize: "12px", fontWeight: "bold"}}>
          {isError.show ? isError.msg : isError.msg}
          </p>
      </div>
    </div>
    </form>
    
    </>
  )
  
}

export default Search