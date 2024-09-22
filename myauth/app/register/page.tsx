import { register } from "@/action/user"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"


const Register = () => {
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212]  dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Welcome
        </h2>
        <form className="my-8" action={register}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <div className="flex flex-col"> 
                <Label className="mb-2" htmlFor="firstname" >
                    First Name
                </Label>
                <Input id="firstName" placeholder="firstname" type="text" name="firstName"/>
                </div>
                <div className="flex flex-col">
                <Label  htmlFor="lastname"  className="mb-2">
                    Last name
                </Label>
                <Input id="lastName" placeholder="lastname" type="text" name="lastName"/>
                </div>
                </div>
               
                    <Label htmlFor="email">Email Address</Label>
                    <Input  id="email"
          placeholder="projectmayhem@fc.com"
          type="email"
          name="email" />
          <Label htmlFor="password">Password</Label>
          <Input className="mb-5" id="password" placeholder="password" type="password" name="password"/>
            <button  className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"> Sign up &rarr;</button>
            <p className="cursor-pointer text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">Already have an account? <Link href={"/login"}>Login</Link></p>
                
            
        </form>
    </div>
  )
}

export default Register