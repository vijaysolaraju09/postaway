import winston from "winston";

const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  defaultMeta: { service: "request-logging" },
  transports: [
    new winston.transports.File({ filename: "requests.log" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

// export const loggerMiddleware = async (req, res, next) => {
//   if (!(req.url.includes("signin") || req.url.includes("signup"))) {
//     const logData=`URL: ${req.url} => `
//   }
// };
