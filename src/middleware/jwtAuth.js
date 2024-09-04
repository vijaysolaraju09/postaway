import jwt from "jsonwebtoken";

export const verifyAuth = (req, res, next) => {
  const token = req.cookies.token;
  try {
    if (token) {
      const payload = jwt.verify(token, "dontshare");
      req.userId = payload.userId;
      next();
    } else {
      res.status(401).json({ success: false, msg: "user verification failed" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, msg: "server error @authorisation" });
  }
};
