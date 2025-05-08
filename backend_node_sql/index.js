import express from "express"
import mysql from "mysql2"
import cors from "cors"

const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"test",
    database:"dog_db_webapp"
})

app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
    res.json("Confirming this is the backend database.")
})

app.get("/dogdata", (req,res)=>{
    const q = "SELECT DogBreed as 'Breed', BreedGroup as 'Breed Group', BarkingLevel as 'Barking Level', CoatType as 'Coat Type', Shedding as 'Shedding Level', MinWeight as 'Minimum Weight (lbs)', MaxWeight as 'Maximum Weight (lbs)' from dogdata"; 
    db.query(q,(err,data)=>{
        if(err) return res.json("Error: Unable to return data.")
        return res.json(data)
    })
})

app.post("/dogdata", (req,res)=>{
    const q = "INSERT INTO dogdata (`DogBreed`,`BreedGroup`,`BarkingLevel`,`CoatType`,`Shedding`,`MinWeight`,`MaxWeight`) VALUES (?)";
    const values = [req.body.DogBreed,req.body.BreedGroup,req.body.BarkingLevel,req.body.CoatType,req.body.Shedding,req.body.MinWeight,req.body.MaxWeight];

    db.query(q,[values], (err,data)=> {
        if (err) return res.json(err);
        return res.json("Dog Breed added successfully. Thank you! :)");
    });
});

app.listen(8800, ()=>{
    console.log("Connected to backend database.")
})