import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"))

app.use(bodyParser.urlencoded( {extended: true} ));

const params = {
    access_key: '3a70fff03036c00d0478ea5e5d646ee1',
    query: 'New Delhi'
}

var apiResponse;

app.get("/", (req,res) => {
    res.render("index.ejs",apiResponse)
})

axios.get('http://api.weatherstack.com/current', {params})
  .then(response => {
    apiResponse = response.data;
    console.log(apiResponse)
    // console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
  }).catch(error => {
    console.log(error);
  });

app.listen(port, () => {
    console.log(`Listening at port ${port}.`);
})