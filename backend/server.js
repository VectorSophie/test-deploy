const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const quotes = [
  "Be yourself; everyone else is already taken.",
  "Two things are infinite: the universe and human stupidity.",
  "So many books, so little time.",
];

app.get("/api/quote", (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: random });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
