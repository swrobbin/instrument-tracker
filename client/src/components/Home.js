import React, { useContext } from 'react'
import { UserContext } from '../context/user';
import { Link } from 'react-router-dom';
import CategoryLink from './CategoryLink';

const Home = () => {
    const { user, loggedIn, categories } = useContext(UserContext)
    const list = categories.map((c) => {
            return (
                <CategoryLink className="grid-item" key={c.id} category={c}/>
            )   
    })


    if (loggedIn && user.username !== ''){
        return(
            <div>
            <h2>Welcome to Instrument Tracker!</h2>
            <br/>
            <p>This is a resource to help you keep track of all of your instruments - in one place.</p>
            <br/>
            <p>Click on the Instruments tab above to add and view your instruments.</p>
            <br/>
            {/* <p>Click on a category below to view your instruments </p> */}
            <br/>
            <h3>Instrument Categories: </h3>
            <div className="grid-container">
                {list}
            </div>
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
