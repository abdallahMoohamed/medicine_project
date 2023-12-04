import jwt from "jsonwebtoken";
import query from '../../DB/connection.js'


const auth = () => {
  return async (req, res, next) => {
    try {
      const { authorization } = req.headers;

      if (!authorization)
        return res.json({ message: "In-valid token" })

      const decoded = jwt.verify(token, process.env.TOKEN_SIGNATURE)// import
      if (!decoded?.id) {
        return res.json({ message: "In-valid token payload" })
      }
      const user = 
      // const authUser = await userModel.findById(decoded.id).select('userName email role')
      // if (!authUser) {
      //   return res.json({ message: "Not register account" })
      // }
      req.user = authUser;
      return next()
    } catch (error) {
      return res.json({ message: "Catch error", err: error?.message })
    }
  }
}

export default auth


/**
 * const query = require("../db/connection");

const admin = async (req, res, next) => {
  const { token } = req.headers;
  const user = await query(`select type from users where token = '${token}'`);
  if (user.length == 0 || user[0].type == 0 ) {
    res.status(403).json({
      msg: " you don't have access ",
    });
  } else {
    next();
  }
};

module.exports = admin;
 */