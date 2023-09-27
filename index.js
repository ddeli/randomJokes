import express from "express"
import axios from "axios"

const app = express();
const port = process.env.PORT || 3001;

const API_URL = "https://official-joke-api.appspot.com";

// Use public folder for static files.
app.use(express.static("public"));

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/",(req,res) =>{
    res.render("index.ejs");
})

app.get("/bringMeMyJoke", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/random_joke");
        res.render("index.ejs", { content: result.data});
      } catch (error) {
        res.render("index.ejs", { content: JSON.stringify(error.response.data) });
      }
  });

app.listen(port,() => {
    console.log(`Server started and listening on port ${port}`);
})