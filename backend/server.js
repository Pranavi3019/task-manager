const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();


// Middleware

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());


// Routes

app.use("/api/auth", authRoutes);

app.use("/api/tasks", taskRoutes);


// Test Route

app.get("/", (req, res) => {
  res.send("Server Running");
});


// MongoDB Connection

mongoose.connect(
  "mongodb+srv://saipranavi2108:Sirinavi1234@cluster0.mjrks0y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)

.then(() => {
  console.log("MongoDB Connected");
})

.catch((err) => {
  console.log(err);
});


// Server

const PORT = 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});