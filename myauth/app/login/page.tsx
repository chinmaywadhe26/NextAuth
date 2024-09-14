import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";
const Login = () => {
  return (
    <div  className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212]  dark:bg-black">
        <form  className="my-8">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="email" type="email" name="email"/>
            <Label htmlFor="password">Password</Label>
            <Input className="mb-6" id="password" placeholder="password" type="password" name="email"/>
            <button className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">Login &rarr; </button>
            <p className="text-right text-neutral-600 text-sm max-w-sm mt-4 dark:text-neutral-300">Dont have an account? <Link href={"/register"}>Register</Link></p>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            </form>
            <form className="mb-2">
                <button className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="submit">
                    <IconBrandGithub/>
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        Github
                    </span>
                </button>
            </form>
            <form>
                <button  className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="submit">
                    <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">Google</span>
                </button>
            </form>
    </div>
  )
}

export default Login