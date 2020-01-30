// app.js
const mysql = require('mysql');

/* const express = require('express')
const bodyParser = require('body-parser') const store = require('./store') const app = express()
app.use(express.static('public'))
app.post('/createUser', (req,res) =>{
}) */



let donatorSQL = 'INSERT INTO donator SET ?';
let sponsorSQL = 'INSERT INTO sponsor SET ?';
let walkerSQL = 'INSERT INTO walker SET ?';



// First you need to create a connection to the db
const con = mysql.createConnection({
  host: 'noynaert.cs.missouriwestern.edu',
  user: 'ppp',
  password: 'pppPassword',
  database: 'ppp'
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

/* con.query('SELECT * FROM donator WHERE donator_ID = 7660 ' , (err,rows) => {
    if(err) throw err;
  
    console.log('Data received from Db:\n');
    console.log(rows);
  }); */ 

/* con.query('INSERT INTO DONATOR SET ?', donator, (err,res) =>{
    if (err) throw err;
    console.log('Insert:', res.insertId);
})  */ 
/* for(i=1;i<10;i++){
  sponsorSubmit();
  donatorSubmit();
  walkerSubmit();
 } */

 function walkerSubmit(){
  let walkId = Math.random(10000)*10000;
  console.log('1')
  //let fNameVal = document.getElementById('donFName').value;
  let walkFNameVal = 'Example';
  console.log('2');
  //let lNameVal = document.getElementById('donLName').value;  
  let walkLNameVal = 'Example';
  console.log('3');
  //let pNumVal = document.getElementById('donPhoneNum').value;
  let walkPhoneNumVal = 'Example';
  console.log('4');
  //let donEmailVal = document.getElementById('donEmail').value; 
  let walkEmailVal = 'Example@Example.Example';
  console.log('5');
  let walkShirtSizeVal = 'Example';
  console.log('6');
  let walkTeamName = "";
  console.log('7')
  //let donAmtVal = document.getElementById('donAmt').value;
  let walkAmtVal = '00.00';

  const walker = {walker_ID: walkId ,walker_FName: walkFNameVal, walker_LName: walkLNameVal, walker_Phonenum: walkPhoneNumVal, walker_Email: walkEmailVal, walker_ShirtSize: walkShirtSizeVal, walker_DonationAMT: walkAmtVal, walker_TeamName: walkTeamName}
  var walkerSQL = 'INSERT INTO walker SET ?';

  con.query(walkerSQL, walker, (err,res) =>{
      if (err) throw err;
  
      console.log('Insert:', res.insertId);
  }) 
};


function donatorSubmit(){
    let donId = Math.random(10000)*10000;
    console.log('1')
    //let fNameVal = document.getElementById('donFName').value;
    let fNameVal = 'Example';
    console.log('2');
    //let lNameVal = document.getElementById('donLName').value;  
    let lNameVal = 'Example';
    console.log('3');
    //let pNumVal = document.getElementById('donPhoneNum').value;
    let pNumVal = 'Example';
    console.log('4');
    //let donEmailVal = document.getElementById('donEmail').value; 
    let donEmailVal = 'Example@Example.Example';
    console.log('5');
    //let donAmtVal = document.getElementById('donAmt').value;
    let donAmtVal = '00.00';

    const donator = {donator_ID: donId ,donator_FName: fNameVal, donator_LName: lNameVal, donator_PhoneNum: pNumVal, donator_Email: donEmailVal, donator_DonationAMT: donAmtVal}
    var donatorSQL = 'INSERT INTO donator SET ?';

    con.query(donatorSQL, donator, (err,res) =>{
        if (err) throw err;
    
        console.log('Insert:', res.insertId);
    }) 
};

function sponsorSubmit(){
  let sponId = Math.random(10000)*10000;
  console.log('1')
  //let fNameVal = document.getElementById('donFName').value;
  let sponCompName = 'Example';
  console.log('2');
  //let pNumVal = document.getElementById('donPhoneNum').value;
  let sponPhoneNum = 'Example';
  console.log('4');
  //let donEmailVal = document.getElementById('donEmail').value; 
  let sponEmail = 'Example@Example.Example';
  console.log('5');
  let sponPackage ="Silver";
  //let donAmtVal = document.getElementById('donAmt').value;
  let sponAmtVal = '00.00';

  const sponsor = {spon_ID: sponId ,spon_CompNAME: sponCompName, spon_PhoneNum: sponPhoneNum, spon_Email: sponEmail, spon_Package: sponPackage ,spon_DonationAMT: sponAmtVal}
  var sponsorSQL = 'INSERT INTO sponsor SET ?';

  con.query(sponsorSQL, sponsor, (err,res) =>{
      if (err) throw err;
  
      console.log('Insert:', res.insertId);
  }) 
};

con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});