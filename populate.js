require("dotenv").config()
const connectDB=require("./db/connect")

const Job=require("./models/Job")
const jsonjobs=require("./MOCK_DATA.json")

const start=async()=>{
    try{
      await connectDB(process.env.MONGO_URI)
      await Job.create(jsonjobs)
      console.log("success")
      process.exit(0)
    }
    catch(err){
        console.log(err)
        process.exit(1)

    }
}
start()