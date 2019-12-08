const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=> {
	res.send('codecomeup.com coming soon');
});

app.listen(port, ()=> {console.log('We are listening')});
