//importing express
// const express = require('express');

import express from 'express';
import env from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
env.config();

connect();
const app = express();

//creating route
app.get('/', (req, res) => {
    res.send('Welcome to the My job portal');
});
 
//port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(
        ` Node Server is running  in ${process.env.DEV_MODE} Mode on port ${PORT}`
            .yellow.bold
    
    );
});
