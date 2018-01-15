const jwt = require('jsonwebtoken');
require('dotenv').config();

let isLogin = (req, res, next) => {
    jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decoded) => {      
        if(err){
            res.status(403).json({
                msg: "Not Auth"
            });
        }
        req.getData = decoded;
        next();
    });

}

module.exports = {
    isLogin
}
