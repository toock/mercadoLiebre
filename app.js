const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/public'));

//app.listen(3000, ()=>{
//    console.log('Servidor funcionando en http://localhost:3000');
//});

app.listen(process.env.PORT || 3000, function (){
    console.log('Servidor funcionando en http://localhost:3000')
})


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});