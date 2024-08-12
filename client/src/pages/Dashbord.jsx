import { NavLink } from 'react-router-dom';
import './dashbord.css'
import Navbar from './navbar';
import { AppContext, useGlobalContext } from '../contex'
import { useEffect, useState } from 'react';
const Dashbord=()=>{
    const {data,logged,gab,removequestion}=useGlobalContext();
    const[count1,setcount1]=useState(0);
    const handleclick=async(val)=>{
      await removequestion(val);
    }
    useEffect(()=>{
      gab();
    },[data]);
    if(logged)
    {
    return(
        <div>
            <Navbar></Navbar>
            <NavLink to="/create" style={{ textDecoration: 'none' }}><div className='create'> <button className='cr'> CREATE </button></div></NavLink>
             <div className="items">
               {  
                  data.map((curr)=>{
                   return(
                    <div key={curr.id}>
                      <div className='item' key={curr.id+1}>
                        <div className='questions' key={curr.id+2}>QUESTION:<br/><hr></hr>{curr.question}</div>
                        <div className='answers' key={curr.id+3}>ANSWER:<br/><hr></hr>{curr.answers}</div>
                      </div>
                      <div className='buttons ' key={curr.id+4}>
                        <NavLink to={`http://localhost:3000/update/${curr.id}`} key={curr.id}><button class="upd b3" key={curr.id+6}>EDIT</button></NavLink>
                        <button class="del b3"key={curr.id+7} onClick={()=>removequestion(curr.id)}>DELETE</button>
                      </div>
                      </div>
                   )
                  })
               }
             </div>
        </div>
    )}
    else {
        return(<>
        <Navbar></Navbar>
            <div>
                 SIGNIN TO ACCESS EMAIL:admin PASSWORD:password
            </div>
            </>
        )
    }
}
export default Dashbord;