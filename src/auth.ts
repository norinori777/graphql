// import { NextFunction } from "express";
// import jwt from "jsonwebtoken";
// export const authentication = (app) => {
//   app.use(
//     /^(?!\/auth).*$/,
//     async (req: Request, res: Response, next: NextFunction) => {
//       if (
//         req.headers.authorization === undefined ||
//         req.headers.authorization.split(" ")[0] !== "Bearer"
//       ) {
//         const status = 401;
//         const message = "Format Error";
//         res.status(status).json({ status, message });
//         return;
//       }
//       jwt.verify(req.headers.authorization.split(" ")[1], "secret", (err) => {
//         if (err) {
//           return res.json({
//             success: false,
//             message: "Token Error",
//           });
//         }
//         next();
//       });
//     }
//   );
// };
