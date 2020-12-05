//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/weatherApp'));

// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname + '/dist/wdd330-weatherapp/index.html'));
// });
app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/weatherApp/' }
    );
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);