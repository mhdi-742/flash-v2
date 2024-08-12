import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext, useGlobalContext } from '../contex'
import { NavLink, useParams } from 'react-router-dom'
import Navbar from "./navbar";
import { useInsertionEffect } from "react";
import './update.css'
const Update=()=>{
const{id}=useParams(); 
const {addquestion,data,editquestion}=useGlobalContext();
const navigate=useNavigate();
const [card,setcard]=useState({
    id:"",
    question:"",
    answers:""
})
const handlechange=(e)=>{
   setcard(prev=>({...prev,[e.target.name]:e.target.value}))
}
const handleclick=(e)=>{
    editquestion(card.id,card.question,card.answers);
    navigate("/dashbord");
}
const[ind,setind]=useState(0);
useEffect(()=>{
   for(let i =0;i<data.length;i++)
   {
      if(data[i].id==id){
        setcard((crd) => ({...crd, question : data[i].question, answers : data[i].answers, id}))
      }
   }
},[id])

useEffect(() => {
    console.log(ind)
} ,[ind])
return(
    <>
    <Navbar></Navbar>
       <div className="form"> 
             <label className="l1">ENTER QUESTION</label> 
            <input className="question i1" id="question" type="text" placeholder="question" name="question" onChange={handlechange} defaultValue={card.question}></input>
            <label className="l1">ENTER ANSWER</label> 
            <input className="answers i1" type="text" placeholder="answer"  name="answers" defaultValue={card.answers} onChange={handlechange}></input>
            <button className="b1"onClick={()=>handleclick()}>SUBMIT</button>
       
        </div>
    </>
)
}
export default Update;