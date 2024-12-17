const express = require('express');
const app = express();
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.get('/api', (req, res) => {
    res.json({ fruits: ['apple', 'banana', 'cherry'] });

});

app.listen(6969, () => {
    console.log('Server is running on http://localhost:6969');
});