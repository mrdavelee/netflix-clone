import Input from "@/components/Input"
import { useState } from "react"

const Auth = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
      <div  className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className="bg-black w-full h-full sm:bg-opacity-50">
            <nav className="px-12 py-5">
                <img src="/images/logo.png" alt="logo" className="h-12" />
            </nav>
            <div className="flex justify-center">
                <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md w-full">
                    <h2 className="text-white text-4xl mb-8 font-semibold">Sign in</h2>
                    <div className="flex flex-col gap-4">
                    <Input value='Email' id='email' label='Email' onChange={(e) => setEmail(e.target.value)} type='email'/>
                    <Input value='username' id='username' label='Username' onChange={(e) => setUsername(e.target.value)} />
                    <Input value='password' id='password' label='Password' onChange={(e) => setPassword(e.target.value)} type='password'/>
                    </div>
                </div>
            </div>
        </div>
      </div>  
    )
}

export default Auth