const express = require('express');
const  cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
const users = ['shaba', 'nilima', 'udhas', 'mahbub', 'faisal', 'niloy'];


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.query);
    const name = users[id];
    res.send({id, name});
})

//post
app.post('/addUser', (req, res) => {
    //save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
})
app.listen(4000, () => console.log('Listening to port 4000'));