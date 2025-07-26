const connection = require("../db");

const uploadCustomerImage = (req, res) => {
  const customerId = req.params.id;
  const image = req.file ? req.file.filename : null;

  if (!image) {
    return res.status(400).json({ message: "No image file uploaded" });
  }

  // Check if customer exists
  connection.query("SELECT * FROM customer WHERE id = ?", [customerId], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: "Customer not found" });

    // Update customer with image
    connection.query(
      "UPDATE customer SET image = ? WHERE id = ?",
      [image, customerId],
      (err, result) => {
        if (err) return res.status(500).json({ error: err });
        return res.status(200).json({
          message: "Image uploaded successfully",
          imageUrl: `http://localhost:3000/uploads/${image}`,
        });
      }
    );
  });
};

module.exports = {
  uploadCustomerImage,
};
