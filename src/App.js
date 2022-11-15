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
          < Routes>
           
            <Route exact path="/" component={Nav} />
              
           
            {/* <Route path="/about" component={About} />  */}
              
            
            <Route path="/aware" component={Aware} />
              
           
            <Route to="/" />
          </ Routes>
        </Router>
        <Signup />
      <Signin />
      </>
    )
}
export default App;