const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const fetch = require('node-fetch');
const MongoClient = require('mongodb').MongoClient;

const maDatabase = 'databaseTD7';
const url =  `mongodb://localhost:27017`;

let db = null;
let collection = null;

app.use(express.static('public'));

const client = new MongoClient(url);

async function GetCollection() {
    await client.connect();
    db = client.db('webAppTD8')
    collection = db.collection('figures')

    console.log('connection réussie')
};
GetCollection();

const QueryFigures = async(name) => {
  console.log(name)
  const result = [];
  const cursor = await collection.find().toArray();
  for (const line of cursor){
    result.push(line.fig)
  }
  return result
}

const PostFigures = async(figure, name) => {
  const doc = {fig:figure, name:name};
  const result = await collection.insertOne(doc);
  console.log(result)
}

//await app.listen(3000);


app.get('/',function(req,res){
  res.send('Main Page');
});

app.post('/pushFigure', jsonParser, function(req,res){
  if(req.body.name!=""){
    PostFigures(req.body, req.body.name);
    console.log(req.body.name)
  }
  else{
    res.send("erreur, pas de nom")
  }
});


app.post('/getFigure', async(req,res) =>{
  console.log('______________',req.body)
  res.send({data:await QueryFigures()})
})

app.listen(3000, function(){
  console.log('Server Running!');
});

//.catch(console.log('erreur'))
