const express = require('express');
const app = express();
const fs = require('fs');

app.listen(8080, () => {
  console.log('Server started on port 8080');
});

app.use(express.static('public'));

const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("b0f3992a9a88ef9a1387a06bdd3bb56617693b772816ef685ad544d11e492f0a");

app.get('/search', (req, res) => {
    const searchTerm = req.query.q;
    const params = {
      engine: 'google',
      google_domain: "google.com",
      q: searchTerm,
      gl: 'us',
      hl: 'en'
    };
  
    search.json(params, (data) => {
        // Save the data to a file called results.json
        fs.writeFile('results.json', JSON.stringify(data, null, 2), (err) => {
          if (err) {
            console.error(err);
            res.sendStatus(500);
          } else {
            console.log('Search results saved to results.json');
            res.sendStatus(200);
          }
        });      
    });
});

app.get('/results', (req, res) => {
    fs.readFile('results.json', 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        res.send(data);
      }
    });
  });
  
