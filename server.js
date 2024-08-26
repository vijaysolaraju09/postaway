import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("Postway");
});
app.listen(3000, () => {
  console.log("Server is running at 3000");
});
