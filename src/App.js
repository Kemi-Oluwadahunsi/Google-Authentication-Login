import { Routes, Route } from 'react-router-dom'
import Register from './Register' 
import Login from "./components/LoginForm";
import "./styles.css"
import Homepage from './Homepage';




function App() {
  return (
    <>
    <main className=' h-screen w-screen back'>
  
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
      </Routes>  
       
      
    </main>  
    
    
    </>
  );
}

export default App;
