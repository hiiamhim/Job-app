const {BadRequestError}=require("../errors")


const testUser=(req,res,next)=>{
    if(req.user.testUser){
        throw new BadRequestError("Test user cannot change resources")
    }
    next()
}

module.exports=testUser