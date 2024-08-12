import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext, useGlobalContext } from '../contex'
import Navbar from "./navbar";
import './update.css'
const Create=()=>{
const {addquestion}=useGlobalContext();
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

    addquestion(card.question,card.answers);
    navigate("/dashbord");
}
return(
    <>
    <Navbar></Navbar>
        <div className="form">
        <label className="l1">ENTER QUESTION</label>
            <input className="question i1" type="text" placeholder="question" name="question" onChange={handlechange}></input>
            <label className="l1">ENTER ANSWER</label>
            <input className="answers i1" type="text" placeholder="answer"  name="answers" onChange={handlechange}></input>
            <button className="b1" onClick={()=>handleclick()}>SUBMIT</button>
        </div>
    </>
)
}
export default Create;