import winston from "winston";
const loggerProd = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: "debug",
      format: winston.format.colorize({ all: true})
    }),
    new winston.transports.File({
      filename: "./errors.log",
      level: "warn",
      format: winston.format.simple(),
    })
  ]
})

export const addLogger = (req, res, next) => {
    req.logger = loggerProd
  next();
}