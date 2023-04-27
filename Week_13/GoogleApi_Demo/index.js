const express = require('express');
const app = express();
const fs = require('fs');

app.listen(8000, () => {
  console.log('Server started on port 8000');
});

app.use(express.static('public'));

const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("3c5fa7730b51c5f0d07051090c03846729473544dd8b801b11bf62c8433bf494");

app.get('/search', (req, res) => {
    const searchTerm = req.query.q;
    const params = {
      // engine: 'google',
      engine: 'google_images',
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
  
