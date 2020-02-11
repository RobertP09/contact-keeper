const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5500;

connectDB();


app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    res.json('msg: hello')
});

//Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contact', require('./routes/contacts'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});