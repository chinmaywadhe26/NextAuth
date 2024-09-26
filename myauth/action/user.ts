"use server"
import connectDB from "@/lib/db"
import { User } from "@/models/User"
import { redirect } from "next/navigation"
import {hash} from "bcryptjs"
import { CredentialsSignin } from "next-auth"
import { signIn } from "@/auth"
const login = async (formData: FormData) => {

    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try{
        await signIn("credentials", {
            redirect: false,
            callbackUrl: "/",
            email,
            password,
        })
    }catch(error){
        const someErr = error as CredentialsSignin
        return someErr.cause
    }
    redirect("/")
}
const register = async  (formData: FormData) => {
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    if(!firstName || !lastName || !password || !email){
        throw new Error("please fill all fields")
    }

    await connectDB()

    const exists = await User.findOne({
        email
    })      
    if(exists) throw new Error ("User already exists")
    
    const hashed = await hash(password, 12)    
    await User.create({firstName, lastName, email, password: hashed})
    console.log("User created successfully")
    redirect('/login')
}

const fetchAllUsers = async () => {
await connectDB()
const users = await User.find({})
return users
}
export {register, login, fetchAllUsers}