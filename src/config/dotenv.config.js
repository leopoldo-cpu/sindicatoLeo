import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

console.log("MONGO_PUERTO:", process.env.MONGO_PUERTO);
console.log("MONGO_HOST:", process.env.MONGO_HOST);
console.log("MONGO_URI_QUINTEROS:", process.env.MONGO_URI_QUINTEROS);
console.log("MONGO_URI_ATLAS:", process.env.MONGO_URI_ATLAS);

export default {
  port: process.env.MONGO_PUERTO,
  host: process.env.MONGO_HOST,
  quinterosUrl: process.env.MONGO_URI_QUINTEROS,
  atlasUrl: process.env.MONGO_URI_ATLAS,
};