const { name } = require('ejs');
const express = require('express');
const app = express();
const path = require('path');
const redditdata = require('./data.json')
// console.log(redditdata)

app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
// const port= 3000;

// app.use((req,res)=>{
//     console.log('we have got the new request');
//     // res.send('<h1>hello we caught your request</h1>');
//     // res.status(200).send( "we got something to see when we will using the status or you say showing the result using the status code" );
//      res.send([1, 2, 3]);
// })
// app.get('/', (req, res) => {
//     res.send('apple');
//     // res.send(posts) || res.send('<h1> posts is my favourite fruit </h1>') 

// })

// app.get('/:subreddits/:postID/', (req, res) => {
//     setTimeout(() => {
//         const { subreddits, postID } = req.params;
//         console.log(subreddits);
//         const { q, color } = req.query;

//         res.send(`<h1>you are right now watching the ${postID} and ${subreddits}</h1>`);

//         res.send(`your searched for ${q} and the color of ${q} is ${color}`);
//     }, 5000);



// })

// app.get('/search', (req,res)=>{
//     const {q}= req.query;
//     console.log(`${q}`);
//     res.send(`${q}`)
// })

app.get('/', (req, res) => {
    // res.send('apple');
    res.render('home.ejs')

})
app.get('/r/:subreddits', (req, res) => {
    const { subreddits } = req.params;
    const data =redditdata[subreddits]
    if(data){
        res.render('subreddits', {...data })
    }else{
        res.render('notfound',{subreddits})
    }
})
app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { bubbles: num });
})
app.get('/cats',(req,res)=>{
    const cats=["jabby" , "babby" , "my", "is" , "Ayush", 'Sharma'];
    res.render('cats',{cats})
})

app.listen(3000, () => {
    console.log('listening  the post 3000')
})
