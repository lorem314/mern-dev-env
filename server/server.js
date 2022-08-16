import mongoose from "mongoose"
import app from "./express"

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost:27017/mernproject", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
mongoose.connection.on("connected", () => {
  console.info("[MongoDB] Successfully connected")
})
mongoose.connection.on("error", () => {
  throw new Error("[MongoDB] Can not connect")
})

app.listen(3000, (err) => {
  if (err) {
    console.error("Error : ", err)
  }
  console.info(`[MERN-DEV-ENV] Server started at port ${3000}`)
})
