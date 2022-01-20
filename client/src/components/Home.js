import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/user';
import { Link } from 'react-router-dom';
import CategoryLink from './CategoryLink';

const Home = () => {
    const { user, loggedIn, categories } = useContext(UserContext)
    const [categoriesToRender, setCategoriesToRender] = useState([])
    
    useEffect(() => {
        const list = categories.map((c) => {
            return (
                <div key={c.id} className="cat-link">
                    <br/>
                    <CategoryLink  key={c.id} category={c}/>
                </div>
            )   
         })
         setCategoriesToRender(list)
    }, [categories])

    if (loggedIn && user.username !== '' && categories){
        return(
            <div id='home'>
            <br/>
            
            <br/>
            <div className="home-content">
            <h2 id="home-header">Welcome to Instrument Tracker!</h2>
            <p>This is a resource to help you keep track of your musical instruments, all in one place.</p>
            <p>Use this page to create an inventory of all of your instruments, using the categories that have been already created, or create your own. </p>
            {/* <br/> */}
            <p>Get started by clicking on the Instruments tab above to add and view your instruments!</p>
            <br/>
            </div>
            <br/>
            <div className="categories">
            <h3 id="home-header">Instrument Categories: </h3>
            <br/>
                {categoriesToRender}
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
