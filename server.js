const express = require('express');
const path = requiere('path');
const port = process.env.PORT || 8081;

app.use( express.static( `${__dirname}/build` ) )

const path = require('path')app.get('*', (req, res)=>{  res.sendFile(path.join(__dirname, './build/index.html'));})
