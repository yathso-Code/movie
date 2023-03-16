import React from 'react'
import { useGlobalContext } from './context'
import './Movie.css';
import {Link} from 'react-router-dom'

function Movie() {
  const {movie, isLoading} = useGlobalContext();
    
  if(isLoading){
     return(
        <div>
        <h1 style={{textAlign: 'center', marginTop: '200px'}}>Loading...</h1>
        </div>
     );
  }

  return (
        <>
        
        <div className='main'>
        {
          movie.map((curMov)=>{
             const moviename = curMov.Title.substring(0, 13);
             return (
                 <div key={curMov.imdbID}>
                 <Link to={`/movie/${curMov.imdbID}`}>
                    <div className='card_border' >
                         <div className='img_box'>
                             <img src={curMov.Poster} className='img'/>
                         </div>
                         <div className='movie_name'>
                             <p className='movie_text'>{moviename.length>=13 ? `${moviename}...`:`${moviename}`}</p>
                         </div>
                    </div>
                  </Link>
                  </div> 
             )
          })
        
        }
        
         </div>
         <p className='dev'>Developer BY: y@atharth shukla</p>  
        </>
  )
}

export default Movie