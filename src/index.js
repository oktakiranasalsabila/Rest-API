require('dotenv').config()
const PORT = process.env.PORT;
const express = require('express');
const usersRoute = require('./routes/users');
const middlewareLogRequest = require('./middleware/logs');
const upload = require('./middleware/multer');
const app = express();
app.use(middlewareLogRequest);
app.use(express.json());
app.use('/assets', express.static('public/img'));
app.use('/users', usersRoute);
app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: 'Upload Berkas berhasil'

    })
})

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})
app.listen(PORT, () => {
    console.log(`server berhasil running http://localhost:${PORT}`);
})