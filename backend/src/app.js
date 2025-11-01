
const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.get('/test',(req,res)=>{
    res.send('HELLOOOO');
})

app.use('/ai', aiRoutes);


module.exports = app;