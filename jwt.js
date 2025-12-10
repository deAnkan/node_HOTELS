const jwt = require('jsonwebtoken');


const jwtAuthMiddleware = (req, res, next)=>{
    
    // Extract the jwt token from the Authentication header
    const token = req.headers.authorization.split(' ')[1]; //Assuming the header is in the format 'Bearer <token>'
    if(!token){
        return res.status(401).json({error: 'Unauthorized: No token provided'});
    }

    try{
        // Verify the JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Attach the decoded user information to the request object
        req.user = decoded;
        next();
    }catch(err){
        console.error(err);
        return res.status(401).json({error: 'Unauthorized: Invalid token'});
    }    
};

// Function to generate JWT token
const generateToken = (userData) => {
    return jwt.sign(userData, process.env.JWT_SECRET);      
}

module.exports = {jwtAuthMiddleware, generateToken};