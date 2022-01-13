import React from 'react'
import { Link } from 'react-router-dom';


const CategoryLink = ({category}) => {
    

    return (
        <div>
           <Link to={`/categories/${category.id}`} className="each-category-link" >
                <br/>
                <h1>{category.name}</h1>
                <br/>
            </Link> 
        </div>
    )
}

export default CategoryLink
