import React from 'react'
import { Link } from 'react-router-dom';


const CategoryLink = ({category}) => {
    // className="category-link"
    return (
        <div>
           <Link to={`/categories/${category.id}`}  >
                <div >
                <h3>{category.name}s</h3>
                <br/>
                </div>
            </Link> 
        </div>
    )
}

export default CategoryLink
