const express = require("express");
const connectDB = require("./config/db");

const app = express();

// localhost:4000/api/users/  whatever route you used in users, etc..
app.use('/api/users', require('./routes/users'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/auth', require('./routes/auth'));


connectDB();

app.get('/', (req, res) => {
    res.send('Server is running in browser...');
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("✌️ Server started on PORT: ", PORT);
});
