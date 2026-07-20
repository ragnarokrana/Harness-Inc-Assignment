const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from Harness CI/CD Demo!");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        timestamp: new Date()
    });
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});