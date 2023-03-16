
import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import React, { useContext, useEffect } from "react";

export const API_URL = `http://www.omdbapi.com/?apiKey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

// we need to create a provider
const AppProvider = ({ children })=>{
  const [isLoading, setIsLoading] = React.useState(true)
  const [isError, setIsError] = React.useState({show: "false", msg: ""})
  const [movie , setMovie] = React.useState([])
  const [query , setQuery] = React.useState("ben")

  const getMovies = async(url)=>{
       setIsLoading(true)
       try{

           const res = await fetch(`${url}&s=${query}`);
            const data = await res.json();

           if(data.Response == 'True'){
               setIsLoading(false)
               setMovie(data.Search)
               setIsError({ show: false,msg: data.Error});
           }else{
            setIsLoading(true)
             setIsError({
              show: true,
              msg: data.Error
              })
           }
           console.log(data);

       } catch(error){
         console.log(error);
       }
  }
    
  useEffect(()=>{
    let timeOut = setTimeout(()=>{
         getMovies(API_URL);
    },800);

    return () => clearTimeout(timeOut);
  }, [query])

    return <AppContext.Provider value={{isLoading, isError, movie, setQuery}}>{children}</AppContext.Provider>
}

const useGlobalContext = ()=>{
   return useContext(AppContext)
}
export { AppProvider, useGlobalContext};