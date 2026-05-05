import express from "express";

const app = express();

// 🔥 Middleware (VERY IMPORTANT)
app.use(express.json());

// ✅ Root API
app.get("/", (req, res) => {
  res.json({
    message: "Server is running 🚀"
  });
});

// Start server
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});