import { Link, NavLink } from "react-router-dom";

export const Navbar=()=>{
return (
 <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-2">
 <div className="container-fluid">
   <a className="navbar-brand" to="/">useContext</a>

   <div className="collapse navbar-collapse" id="navbarNav">
     <div className="navbar-nav">
     
       <NavLink className={({isActive})=>`nav-link ${ isActive ? 'active': '' }`}  to="/">
           Home
       </NavLink>

       <NavLink className={({isActive})=>`nav-link ${ isActive ? 'active': '' }`} 
                to="/Login">
           Login
       </NavLink>


       <NavLink className={({isActive})=>`nav-link ${ isActive ? 'active': '' }`} 
                to="/About">
           Acerca de...
       </NavLink>

     </div>
   </div>
 </div>
</nav>
 </>
);

}
export default Navbar;