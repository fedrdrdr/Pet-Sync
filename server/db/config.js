const dotenv = require('dotenv')
dotenv.config()

const dbUrl = process.env.DB_URL

const options = {
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

module.exports = { dbUrl, options }
