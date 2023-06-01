
import React,{useState} from "react";
import './../styles/App.css';
import LogIn from './login.js';

const App = () => {
  let [isLoggedIn,setIsLoggedIn] = useState(false);

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        {isLoggedIn?<p>You are logged in!</p>:<LogIn login={setIsLoggedIn}/>}
    </div>
  )
}

export default App
