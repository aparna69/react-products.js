import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'; // Assuming you're using an external CSS file
const Nav=({cart})=>{
       
    return(
       <div className="nav-container">
        <img src="https://tse4.mm.bing.net/th?id=OIP.wjcrA2QJyXWcl-bFkA67ZgHaFj&pid=Api&P=0&h=220" style={{width:"80px", height:"80px"}}  alt="no image"></img>
       <h1>Online Shopping</h1> 
        
            <h1 >
            <Link to='/'className='nav-link'>Home</Link> 
            <Link to='/login'className='nav-link'>Products</Link>
            <Link to='/contact'className='nav-link' >Contact</Link>
            <Link to='/about'className='nav-link' >About</Link>
            </h1>
            


        </div>
        
    )
}
export default Nav;