import React, { useContext } from 'react'
import { UserContext } from '../context/user';
import { Link } from 'react-router-dom';
import CategoryLink from './CategoryLink';

const Home = () => {
    const { user, loggedIn, categories } = useContext(UserContext)
    const list = categories.map((c) => {
            return (
                <div className="">
                    <CategoryLink  key={c.id} category={c}/>
                </div>
            )   
    })


    if (loggedIn && user.username !== ''){
        return(
            <div>
            <br/>
            <h2>Welcome to Instrument Tracker!</h2>
            <br/>
            <div className="home-content">
            <p>This is a resource to help you keep track of all of your instruments, all in one place.</p>
            <p>If your collection is </p>
            <br/>
            <p>Get started by clicking on the Instruments tab above to add and view your instruments.</p>
            <br/>
            </div>
            {/* <p>Click on a category below to view your instruments </p> */}
            <br/>
            
            <div className="categories">
            <h3>Instrument Categories: </h3>
            <br/>
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
