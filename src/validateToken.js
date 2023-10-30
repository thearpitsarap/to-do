const jwt = require("jsonwebtoken")

const validateToken = (req,res,next)=>{
    let token;
    let authHeader = req.authHeaderAuthorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        jwt.verify(token,"Arpit",(err,decoded)=>{
            if(err){
                res.status(401);   
            }
            req.user = decoded.user;
            next();
        });
        if(!token){
            res.status(401);
        }
    }
}
module.exports = {validateToken};