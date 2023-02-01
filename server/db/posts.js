import mongoose from "mongoose"

const postSchema = mongoose.Schema({
	title:{
		type:String,
		required:true
	},
	content:{
		type:String,
		required:true
	},
	creator:{
		type:String,
		required:true
	}
})

const Post = mongoose.model("post",postSchema) //model ismini post verdik, mongo db sonuna s takısı ekleyerek koleksiyon haline getiriyor

export default Post