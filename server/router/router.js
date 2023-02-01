import express from "express"

import mongoose from "mongoose"
import Post from "../db/posts.js"

const router = express.Router()

//aşağıdakilerin karşılığı localost:5000 değil, localhost:5000/posts çünkü indexde posts olarak verdik

router.get("/",async(req,res)=>{
	try{
		const allPosts = await Post.find()
		res.json(allPosts)
	}
	catch(error){
		console.log(error)
	}
})

router.get("/:id",async(req,res)=>{
	try{
		const {id} = req.params
		const post = await Post.findById(id)
		res.status(200).json(post) //başarılı durum koduyla postu geri döndürdük
	}
	catch(error){
		console.log(error)
	}
})

router.post("/",async(req,res)=>{
	try{
		const post = req.body
		const createdPost = await Post.create(post)
		res.status(201).json(createdPost) //201 kodu yeni bir şey oluşturulduğunu söyler
	}
	catch(error){
		console.log(error)
	}
})

router.put("/:id",async(req,res)=>{
	try{
		const {id} = req.params
		const {title,content,creator} = req.body

		if (!mongoose.Types.ObjectId.isValid(id)) {  //eğer böyle bir id yoksa 404 hatası göndertiyoruz
			return res.status(404).send("post bulunamadi")
		}

		const updatedPost = {title,content,creator,_id:id}

		await Post.findByIdAndUpdate(id,updatedPost,{new:true}) //new:true parametresi, gösterilecek verinin son güncellenmiş hali olması için verilir 

		res.json(updatedPost)
	}
	catch(error){
		console.log(error)
	}
})

router.delete("/:id",async(req,res)=>{
	try{
		const {id} = req.params
		await Post.findByIdAndRemove(id)
		res.json({message:"Post Silindi"})
	}
	catch(error){
		console.log(error)
	}
})

export default router