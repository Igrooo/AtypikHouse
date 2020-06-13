let express = require('express');
let ping = express.Router();

ping.get('/:level/ping', function (req, res) {
    //ping route is reached accross middleware if token is valid
    res.status(200).send({
        status: true,
        content: 'JWT is valid'
    })
});

export default ping;