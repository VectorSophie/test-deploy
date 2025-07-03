const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const languages = [
  { name: "JavaScript", description: "The language of the web." },
  { name: "Python", description: "Great for beginners and AI projects." },
  { name: "C++", description: "Powerful for performance and games." },
  { name: "Rust", description: "Memory-safe systems programming." },
  { name: "Go", description: "Simple and fast concurrency." },
  { name: "TypeScript", description: "JavaScript with type safety." },
  { name: "Kotlin", description: "Modern JVM language for Android." },
  { name: "Ruby", description: "Elegant and expressive syntax." },
  { name: "Swift", description: "Apple’s language for iOS/macOS." },
  { name: "Java", description: "Write once, run anywhere." },
];

app.get("/api/language", (req, res) => {
  const random = languages[Math.floor(Math.random() * languages.length)];
  res.json(random);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});