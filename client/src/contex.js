import React, { useEffect, useState, useContext } from "react";
import { json } from "react-router";
import axios from "axios";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [newquestion, SetQuestion] = useState([]);
  const [logged, islogged] = useState(false);
  const [data, setdata] = useState([{}]);
  const [flag, setFlag] = useState(false);
  const check = (username, password) => {
    if (username === "admin" && password === "password") return 1;
    return 0;
  };
  const addquestion = async (question, answers) => {
    const res = await fetch("https://flash-v2.onrender.com/adddata", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        question: question,
        answers: answers,
      }),
    });
  };
  const removequestion = async (id) => {
    const res = await fetch("https://flash-v2.onrender.com/del", {
      method: "delete",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: id,
      }),
    }).then((res) => {
      console.log(res); 
    });
  };
  const editquestion = async(id, question, answers) => {
    const res = await fetch("https://flash-v2.onrender.com/update", {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: id,
        question:question,
        answers:answers
      })})
  };
  const gab = async () => {
    try {
      const info = await fetch("https://flash-v2.onrender.com/data", { method: "get" });
      const ans = await info.json();
      setdata(ans);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AppContext.Provider
      value={{
        logged,
        islogged,
        check,
        addquestion,
        removequestion,
        editquestion,
        gab,
        flag,
        data,
        addquestion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
