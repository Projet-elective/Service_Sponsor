const jwt = require('jsonwebtoken');
 
exports.auth = (req, res, next) => {
   try {
       const token = req.headers.authorization;
       // Verify the token then give the information of the authentificated user
       const decodedToken = jwt.verify(token, 'sasori-secret-key');
       const userId = decodedToken.id;
       req.auth = {
           userId: userId,
           role: decodedToken.role[0]
       };
	next();
   } catch(error) {
       res.status(401).json({ error });
   }
};