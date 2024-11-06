const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.JWT_SECRET;


const authenticateToken = async (req, res, next) => {
    let token = req.header('Authorization');
    if(!token) return res.status(400).send({message:'Authentication Failed'});

    jwt.verify(token, secretKey,(err,user)=>{
        if(err) return res.status(403).send({message:'token is not valid, Ligma again'})
        req.user = user;
        next();
    })


}



module.exports = authenticateToken;