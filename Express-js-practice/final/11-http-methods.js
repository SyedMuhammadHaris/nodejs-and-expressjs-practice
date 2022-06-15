const express = require('express');
const app = express();

const {people} = require('./data');

//Static assets
app.use(express.static('./methods-public'));
//parse form data
app.use(express.urlencoded({extended:false}));
// parse json
app.use(express.json());



//HTTP GET Method 
app.get('/api/people',(req,res)=>{
   res.status(200).json({success:true, data:people});
});

// app.get('/api/people/:peopleID', (req, res) => {
//     const { peopleID } = req.params;
//     console.log(req.params);
//     const singlePeople = people.find((people) =>
//       people.id === Number(peopleID)
//     );
  
//     if (!singlePeople) {
//       res.status(404).send('404 We cannot find the resource');
//     }
//     res.json(singlePeople);
  
//   });
//end

//HTTP POST METHDOD STARTS

app.post('/login',(req,res)=>{
//    res.send("Post")

const { name } = req.body;
if(!name){
    res.status(404).send("You enter empty value")
}
res.status(200).send(`Welcome ${name}`);
});


app.post('/api/people',(req,res)=>{
     const { name } = req.body;
     if(!name){
          res
          .status(400)
          .json({success:false,msg:"Please provide name value"})
     }
     res.status(201).json({success:true, person:name});
});

app.post('/api/postman/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, data: [...people, name] })
})

//END

//HTTP PUT METHOD TO UPDATE THE DATA

app.put('/api/people/:id',(req,res)=>{
  const { id } = req.params
  const { name } = req.body

  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` })
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
})

//END
//HTTP DELETE METHOD
app.delete('/api/people/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` })
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  return res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000,()=>{
  console.log("Server is listneing");
});

