const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send('Server is running in browser...');
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("✌️ Server started on PORT: ", PORT);
});
