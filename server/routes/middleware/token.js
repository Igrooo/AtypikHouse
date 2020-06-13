const jwt = require('jsonwebtoken');

let secretkey = 'AJ2I-K4QTPNecAjd8AM43VaB57KhR';

// create a token
function token(email) {
    // expires after half and hour (1800 seconds = 30 minutes)
    return jwt.sign(email, secretkey, { expiresIn: '1800s' });
}

export default token;