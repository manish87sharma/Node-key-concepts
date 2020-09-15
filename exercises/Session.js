var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
// var

var app = express();
let users = {
    name: "manish",
    Age: "32"
}
app.use(session({ secret: "my-secret", resave: false, saveUninitialized: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
    let viewCount = req.session.viewCount;
    let user = req.session.user;
    if (!viewCount) {
        req.session.viewCount = 1;
    } else {
        // req.session.user="default"
        // console.log("user does not exists")
        res.set
        req.session.viewCount++;
    }
    res.send(`<p>User is visited the site ${req.session.viewCount} times</p>`)
});

//Route for adding cookie 
app.get('/setuser', (req, res) => {
    res.cookie("userData", users);
    res.send('user data added to cookie');
});

//Iterate users data from cookie 
app.get('/getuser', (req, res) => {
    //shows all the cookies 
    res.send(req.cookies);
});


app.listen(3000, () => {
    console.log("server is running on port ", 3000)
})