import { Navigate, NavLink } from 'react-router-dom';
import './navbar.css'
import { AppContext, useGlobalContext } from '../contex'
const Navbar=()=>{
    const {logged,islogged}=useGlobalContext();
    const val=localStorage.getItem("token");
    if(val!=null) {
        islogged(true);
    }
    else {
        islogged(false);
    }
    if(logged===true)
   { return(
        <div className="Navbar" style={{ textDecoration: 'none' }}>
            <div className="title"><NavLink to="/" style={{ textDecoration: 'none',color:'white' }}>FLASHCARD</NavLink></div>
            <div className='dashbord'><NavLink to="/dashbord" style={{ textDecoration: 'none',color:'white' }}>Dashbord</NavLink></div>
            <div className='admin'><div onClick={()=>{localStorage.clear();islogged(false);}}>SignOut</div></div>
        </div>
    )}
    else{
        return(
        <div className="Navbar" style={{ textDecoration: 'none' }}>
        <div className="title"><NavLink to="/" style={{ textDecoration: 'none',color:'white' }}>FLASHCARD</NavLink></div>
        <div className='dashbord'><NavLink to="/dashbord" style={{ textDecoration: 'none',color:'white' }}>Dashbord</NavLink></div>
        <div className='admin'><NavLink to="/signin" style={{ textDecoration: 'none', color:'white'}}>SIGN IN</NavLink></div>
    </div>
        )
    }
}
export default Navbar;