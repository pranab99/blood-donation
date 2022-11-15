import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Nav from "./components/Nav"
import Home from "./components/Home"
import Aware from "./components/Aware"

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";

function App(){
    return (
        // <div>
        //     <Nav/>
        //     <Signup />
        //     <Signin />
        //     <Aware />
        // </div>
        <>
        <Router>
            <Nav/>
          < Routes>
           
            <Route exact path="/" element={<Home/>}/>
              
           
            {/* <Route path="/about" component={About} />  */}
              
            
            <Route path="/aware" element={<Aware/>}/>
              
           
            <Route to="/" />
          </ Routes>
        </Router>
     
      </>
    )
}
export default App;