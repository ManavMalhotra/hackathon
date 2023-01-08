require('dotenv').config()
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
const apiKey = process.env.OPENAI

module.exports = {
  MONGODB_URI,
  PORT,
  apiKey
}