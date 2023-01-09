import mongoose from "mongoose"

const MONGODB = process.env.MONGODB

try {
  await mongoose.connect(MONGODB)
} catch (error) {
  console.log('Error de conexión a mongoDB', error)
}