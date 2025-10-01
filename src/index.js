// require('dotenv').config({path: './env'})
import dotenv from "dotenv"

import connectDB from "./db/index.js";
import app from './app.js';

dotenv.config({
    path: './env'
})


// db folder approch



connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is started or running at port ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("MONGO DB connection failed !!!", err)
    })

















// db connection first approch

// function connectDB() {

// }
// connectDB()


// db connection second approch
// const app = express()

// ;( async () => {
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on('error', () => {
//         console.log("ERROR :", error )
//         throw error
//        })

//        app.listen(process.env.PORT, () => {
//         console.log(`App is listening on port ${process.env.PORT}`)
//        })

//     } catch (error){
//         console.error("ERROR :", error)
//         throw error
//     }
// })()