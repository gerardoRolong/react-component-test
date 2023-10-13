const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(cors())


// create a GET route
app.get('/proxy', async (req, res) => {
  try{
    const { url } = req.query;
    console.log('brefore', url);
    const response = await axios.get(url, {timeout: 1000});
    res.send(response.data);  
    console.log('after')
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while making the proxy request' });
    console.log('ex')
  }  
});

// create a GET route
app.get('/a', (req, res) => {
  try{
    console.log('brefore', url);
    res.send({hola: 'holaaaa'});  
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while making the proxy request' });
  }  
});