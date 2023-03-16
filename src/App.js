import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import SingleMovie from './component/SingleMovie'
import Error from './component/Error';
import { Routes, Route} from  'react-router-dom';

function App() { 
  return (
       <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movie/:id' element={<SingleMovie/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
       </> 
  )
}

export default App;
