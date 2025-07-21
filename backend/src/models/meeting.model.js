import mongoose, {Schema} from "mongoose";

const meetingSchema=new Schema({
    userid:{type:String},
    meetingCode:{type:String,required:true},
    date:{type:Date,default:Date.now,required:true}
})

const meeting=mongoose.model("meeting",meetingSchema)

export {meeting};