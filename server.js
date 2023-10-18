const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/upload', function(req, res) {
    res.status(200).json({ result: true, msg: 'GET request to the homepage' });
});

app.post("/upload", (req, res) => {
    setTimeout(() => {
        console.log('file uploaded')
        return res.status(200).json({ result: true, msg: 'file uploaded' });
    }, 1000);
});

app.delete("/upload", (req, res) => {
    console.log(`File deleted`)
    return res.status(200).json({ result: true, msg: 'file deleted' });
});


app.listen(3000, () => {
    console.log(`Server running on port 3000`)
});