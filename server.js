const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
let app = express();
app.use(cors());
app.options("*", cors());

app.use(express.static(path.join(__dirname, "dist")))
    .get("/", (req, res) => {
        res.sendFile("index.html", { root: "dist" });
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`));
