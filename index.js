import express from "express";
import axios from "axios";



const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req,res)=>{
    try {
        const catImage = await axios.get("https://api.thecatapi.com/v1/images/search");
        const factCat = await axios.get("https://cat-fact.herokuapp.com/facts")
        res.render("index.ejs",{
            image: catImage.data[0].url,
            fact: factCat.data[Math.floor(Math.random()*5)].text
        } );
       
    } catch (error) {
        res.status(404).send(error.message);
    }
    
});

app.listen(port, () =>{
    console.log(`app runing on port ${port}`);
});