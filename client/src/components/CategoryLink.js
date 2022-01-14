import React from 'react'
import { Link } from 'react-router-dom';
// import { UserContext } from '../context/user';



const CategoryLink = ({category}) => {
    

    return (
        <div>
           <Link to={`/categories/${category.id}`} className="each-category-link" >
                <br/>
                <h3>{category.name}</h3>
                <br/>
            </Link> 
        </div>
    )
}

export default CategoryLink
