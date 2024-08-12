import express from "express"
import mysql from "mysql2"
import cors from "cors"
const app=express();
const db=mysql.createConnection({
    host:"mysql-101-tuf-v1.k.aivencloud.com",
    user:"avnadmin",
    port:"14386",
    password:"AVNS_S1V_rNMOX99fb7AsMd5",
    database:"tuf",
});
app.use(cors({
    origin : true,
    credentials : true
}));    
app.use(express.json());
app.listen(8000,()=>{
 console.log("connected");
})
app.get("/",(req,res)=>{
    res.send("hello its backend");
})
app.get("/data",(req,res)=>{
    const q="SELECT * FROM tuf.new_table;"
    db.query(q,(err,data)=>{
        if(err){
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
})
app.post("/adddata",(req,res)=>{
    const values=[
        req.body.question,
        req.body.answers
    ];
    console.log(req.body);
    const q="INSERT INTO `tuf`.`new_table` (`question`, `answers`) VALUES (?);";
    db.query(q,[values],(err,data)=>{
        if(err) console.log(err);
        else return res.json("DONE");
    })
})
app.delete("/del",(req,res)=>{
    console.log(req.body)
    const val=[req.body.id];
    const q="DELETE FROM tuf.new_table WHERE id=(?)"
    db.query(q,val,(err,data)=>{
        if(err) console.log(err);
        else {console.log("del");return res.json("DONE");}
    })
})
app.put("/update",(req,res)=>{
    const q="UPDATE `tuf`.`new_table` SET `question` = ?, `answers` = ? WHERE (`id` = ?)";
    const values = [req.body.question, req.body.answers, req.body.id];
    console.log(req.body);
    db.query(q,values,(err,data)=>{
        if(err) {res.send(err);console.log(err)}
        else {res.send(data);console.log("updated")};
    })
})