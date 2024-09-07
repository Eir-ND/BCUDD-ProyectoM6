const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  let { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ msg: "Access denied" });
  }
  try {
    let [type, token] = authorization.split(" ");
    if (type === "Token" || type === "Bearer") {
      const openToken = jwt.verify(token, process.env.SECRET);

      req.user = openToken.user;
      next();
    } else {
      return res.status(401).json({ msg: "Access denied" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "An error has occurred", error });
  }
};
