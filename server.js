const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});

// const app = express();
// const { animals } = require('./data/notebook');

// app.get('/api/notebook', (req, res) => {
//     res.send('Hello!');
//   });

// app.listen(3001, () => {
//     console.log(`API server now on port 3001!`);
//   });
  