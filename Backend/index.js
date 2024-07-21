const express=require('express');
const cors=require('cors');
const mysql=require('mysql2');
const bodyparser=require('body-parser');


const app=express();

app.use(express.json());

app.use(bodyparser.urlencoded({encoded:false}));


//cors - enabling communication between two different ports
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true
  }));

  //Database setup

  //setting up config for db connection
  const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Trishala@99',
    database:'wincred'
  });

  //Connecting to database using connect function
  connection.connect((err)=>{

    if(err){
        console.log(`${err} error occurred!`);
 
       return;
       }
     
    console.log('Database connected!');
    })


    //code to insert data into signup table

    app.post('/signup', (req,res)=>{

     const {email, password, user}=req.body;

      const sql='insert into signup (email, password, user) values (?, ?, ?);';

      connection.query(sql, [email, password, user], (err, results)=>{
        if(err){
          console.log(`Error occured while inserting data due to error ${err}`);
          res.status(500).send('Server error');
          return;
        }
        res.status(200).send('Signup successful');
      });

    });

    //code to validate login form

    app.post('/login', (req, res) => {
      const { email, password } = req.body;
      const sql = 'SELECT user FROM signup WHERE email = ? AND password = ?';
      connection.query(sql, [email, password], (err, results) => {
          if (err) {
              console.log(`${err} error occurred!`);
              res.status(500).send('Server error');
              return;
          }
          if (results.length > 0) {
              res.status(200).json({ user: results[0].user });
          } else {
              res.status(401).send('Invalid credentials');
          }
      });
  });

    


app.use('/', (req,res)=>{

res.send('Server Running!');

})

const Port=5000;

app.listen(Port, ()=>{
    console.log(`Server running on port ${Port}`);
})


