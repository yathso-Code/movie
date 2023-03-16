import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from './context'
import { API_URL } from './context'
import './SingleMovie.css'

function SingleMovie() {
  const {id} = useParams();
  const [isLoading, setIsLoading] = React.useState(true)
  const [query , setQuery] = React.useState("")

  const getMovies = async(url)=>{
         setIsLoading(true);
       try{

           const res = await fetch(url);
            const data = await res.json();
            console.log("DATA=>",data);
           if(data.Response == 'True'){
               console.log("data is inserting");
               setIsLoading(false)
               setQuery(data)
              console.log("data is inserted");
           }
       } catch(error){
         console.log(error);
       }
  }
    
  useEffect(()=>{
    let timeOut = setTimeout(()=>{
         getMovies(`${API_URL}&i=${id}`);
    },700);

    return () => clearTimeout(timeOut);
  }, [id])
 
  if(isLoading){
    return(
       <div>
       <h1 style={{textAlign: 'center', marginTop: '200px'}}>Loading...</h1>
       </div>
    );
 }


  return (
      <>
 
            <div className="main_single_box" >
            <div className='img_box_single' >
             <img src={query.Poster}/>
            </div>
            <div className='text_box'>
                <div className='text'>
                     <p className='name'>{query.Title}</p>
                     <br></br>
                     <p>{query.DVD}</p>
                     <br></br>
                     <p>{query.Genre}</p>
                     <br></br>
                     <p>{query.imdbRating}</p>
                     <br></br>
                     <p>{query.Country}</p>
                     <br></br>
                     <button>Downlode</button>
                </div>
            </div>  
     </div>
      
        
            {/* <div className="main_single_box">
            <div className='img_box_single' >
             <img src=''/>
            </div>
            <div className='text_box'>
                <div className='text'>
                     <p className='name'>{single.imdbID}</p>
                     <br></br>
                     <p>19 Dec 1001</p>
                     <br></br>
                     <p>Drama, Romance</p>
                     <br></br>
                     <p>7.9/10</p>
                     <br></br>
                     <p>USA</p>
                     <br></br>
                     <button>Downlode</button>
                </div>
            </div>  
     </div> */}
        </>
   )
}

export default SingleMovie