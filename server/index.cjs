const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const dalleRoutes = require('./routes/dalle.routes').default;
const authRoutes = require('./routes/auth.routes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

console.log('🚨 DEBUG authRoutes:', authRoutes); 

app.use("/api/v1/dalle", dalleRoutes);
app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from DALL.E + Auth" });
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(8080, () =>
      console.log("🚀 Server running on http://localhost:8080")
    );
  })
  .catch((err) => console.error("MongoDB connection error:", err));
