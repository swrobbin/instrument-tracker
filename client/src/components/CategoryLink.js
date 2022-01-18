import React from 'react'
import { Link } from 'react-router-dom';


const CategoryLink = ({category}) => {
    
    return (
        <div>
           <Link to={`/categories/${category.id}`}  >
                <div className="category-link">
                <h3>{category.name}s</h3>
                <br/>
                </div>
            </Link> 
        </div>
    )
}

export default CategoryLink
