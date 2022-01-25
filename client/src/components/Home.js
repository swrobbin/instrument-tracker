import React, { useContext } from 'react'
import { UserContext } from '../context/user';
import { Link } from 'react-router-dom';
import CategoryLink from './CategoryLink';

const Home = () => {
    const { user, loggedIn, categories } = useContext(UserContext)
    
    

    if (loggedIn && user.username !== '' && categories){

        const list = categories.map((c) => {
            return (
                <div key={c.id} className="cat-link">
                    <br/>
                    <CategoryLink  key={c.id} category={c}/>
                </div>
            )   
         })

        return(
            <div id='home'>
            <br/>
            <br/>
            <div className="home-content">
            <h2 id="home-header">Welcome to Instrument Tracker!</h2>
            <p>This is a resource to help you keep track of your musical instruments, all in one place.</p>
            <p>Use this page to create an inventory of all of your instruments, using the categories that have been already created, or create your own. </p>
            <p>Get started by clicking on the Instruments tab above to add and view your instruments!</p>
            <br/>
            </div>
            <br/>
            <div className="categories">
            <h3 id="home-header">Instrument Categories: </h3>
            <br/>
                {list}
            </div>
            </div>
            
        )
    } else {
        return (
            
            <div id="home-login">
                <h3>Please  <button><Link to='/login'>Login</Link></button> into your Instrument Tracker Account.</h3>
                <br/>
                <h5>New to Instrument Tracker? </h5>
                <h5>Create a new account <button><Link to='/signup'>here!</Link></button> </h5>
            </div>
        )
    }
    
}

export default Home
