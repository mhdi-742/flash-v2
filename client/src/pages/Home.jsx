import { useEffect, useState } from "react";
import Navbar from "./navbar";
import "./home.css"
import { AppContext, useGlobalContext } from '../contex'
const Home=()=>{
     const {gab,flag,data}=useGlobalContext();
     const[flip,Setflip]=useState('card');
     useEffect(()=>{
        gab();
     },[])
     const size=data.length;
     const [count,setcount]=useState(0);
     const [next,setnext]=useState("next");
     const [prev,setprev]=useState("prev");
     const add=()=>{
       setcount((count+1)%size);
      }
      const sub=()=>{
        if(count>0) setcount(count-1);
        else setcount(size-1);
      }
    if(data.length)
    {return(
        <>
        <Navbar></Navbar>
        <div className="basiccard">
        <div className="scene scene--card">
        <div className={flip}>
          <div className="card__face card__face--front" onClick={() => Setflip('card is-flipped')}>{data[count].question}</div>
          <div className="card__face card__face--back" onClick={() => Setflip('card')}>{data[count].answers}</div>
        </div>
      </div>
      <p className="reveal">Click card to REVEAL</p>
      <div className="buttons">
         <div className={prev}>
           <button className="b1"onClick={async()=>{await Setflip('card');await setTimeout(()=>sub(),500);}}>PREV</button>
         </div>
         <div className={next}>
           <button className="b2" onClick={async()=>{await Setflip('card'); await setTimeout(()=>add(),500);}}>NEXT</button>
         </div>
      </div>
      </div>
      </>
    )}
    else {
      return(
        <>
        <Navbar></Navbar>
        <div className="basiccard">
        <div className="scene scene--card">
        <div className={flip}>
          <div className="card__face card__face--front" onClick={() => Setflip('card is-flipped')}>NO QUESTION</div>
          <div className="card__face card__face--back" onClick={() => Setflip('card')}>NO QUESTION</div>
        </div>
      </div>
      <p className="reveal">Click card to REVEAL(wait for sometimes if it looks stuck)</p>
      <div className="buttons">
         <div className={prev}>
           <button className="b1"onClick={async()=>{await Setflip('card');await setTimeout(()=>sub(),500);}}>PREV</button>
         </div>
         <div className={next}>
           <button className="b2" onClick={async()=>{await Setflip('card'); await setTimeout(()=>add(),500);}}>NEXT</button>
         </div>
      </div>
      </div>
      </>
      )
    }
}
export default Home;