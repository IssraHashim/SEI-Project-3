import dotenv from 'dotenv'
dotenv.config()

// export const port = 4000
// export const dbURI = 'mongodb://127.0.0.1/platester'
// export const secret = 'PlAtEsTeR'

export const dbURI = process.env.MONGODB_URI || 's'
export const port = process.env.PORT || 4000
export const secret = process.env.SECRET || 'PlAtEsTeR'