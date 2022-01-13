import React, {useContext} from 'react'
import { UserContext } from "../context/user"
import CategoryLink from './CategoryLink';
import { Link } from 'react-router-dom';


const Categories = () => {

    const { loggedIn, categories } = useContext(UserContext);

    const list = categories.map((category) => {
        return (
         <div className="category-link">
         <CategoryLink key={category.id} category={category}/>
         </div>
        ) 
     })

     if (loggedIn){
        <div className="categories" >
            <h2>Instrument Categories</h2>
            <br/>
            <br/>
            {list}
            <br/>
            <br/>
        </div>
     } else {
        return (
            <div>
                <br/>
                <br/>
                <h3>Please <Link to='/login'>Login</Link> into your Instrument Tracker Account.</h3>               
            </div>
        )
     }
    
}

export default Categories
