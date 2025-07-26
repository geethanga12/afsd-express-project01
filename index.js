const express = require("express");
const app = express();
const port = 3000;
const dotenv = require("dotenv");
const path = require("path");

// Load .env file
dotenv.config();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Serve static images from /uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Route files
const customerRoutes = require("./routes/customer-routes");
const authRoutes = require("./routes/authRoutes");
const customerImageRoutes = require("./routes/customer-image-routes");

// ✅ Use route files
app.use("/api/v1/customer", customerRoutes);
app.use("/api/v1/customer", customerImageRoutes); // Upload route
app.use("/api/v1/auth", authRoutes);

// ✅ Start server (after all route usage)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


// const express = require("express");
// const app = express();
// const port = 3000;
// const dotenv = require("dotenv");
// const path = require("path"); // ✅ Fix: import path

// // Load .env file
// dotenv.config();

// // Middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // <-- MUST BE BEFORE routes

// // Route files
// const customerRoutes = require("./routes/customer-routes");
// const authRoutes = require("./routes/authRoutes"); // ✅ Add this line

// // Route usage
// app.use("/api/v1/customer", customerRoutes);
// app.use("/api/v1/auth", authRoutes); // ✅ Mount auth routes

// // Start server
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });


// const customerImageRoutes = require("./routes/customer-image-routes"); // ✅ new

// // Use it with a versioned route prefix
// app.use("/api/v1/customer", customerImageRoutes);


