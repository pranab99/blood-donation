import Signin from "./Signin"
import Signup from "./Signup"
import Nav from "./Nav"
function Home()
{
    return(<>
          <Nav/>
            <Signup />
            <Signin />
            
    </>)
}

export default Home;