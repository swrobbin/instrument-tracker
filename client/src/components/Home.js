import React, { useContext } from 'react'
import { UserContext } from '../context/user';
import { Link } from 'react-router-dom';

const Home = () => {
    const { user, loggedIn } = useContext(UserContext)
    // const [ ] = useState()

    if (loggedIn){
        return(
            <div>
            <p>{user.username}</p>
            <p>Home</p>
        </div>
            
        )
    } else {
        return (
            
             <div>
             <h3>Please <Link to='/login'>Login</Link> into your Instrument Tracker Account.</h3>
             <br/>
             <h5>New to Instrument Tracker? Signup <Link to='/signup'> <em>here</em></Link></h5>
         </div>
        )
    }
    
}

export default Home
