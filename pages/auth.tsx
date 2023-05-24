import Input from "@/components/Input"
import { useCallback, useState } from "react"

const Auth = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [variant, setVariant] = useState('login')

    const toggleVariant = useCallback(() => {
        setVariant((currentValue) => currentValue == 'login' ? 'register' : 'login')
    }, [])

    return (
      <div  className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className="bg-black w-full h-full lg:bg-opacity-50">
            <nav className="px-12 py-5">
                <img src="/images/logo.png" alt="logo" className="h-12" />
            </nav>
            <div className="flex justify-center">
                <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md w-full">
                    <h2 className="text-white text-4xl mb-8 font-semibold">
                        {variant == 'login' ? 'Sign in' : 'Register'}
                    </h2>
                    <div className="flex flex-col gap-4">
                        {variant == 'register' && (
                            <Input value='Email' id='email' label='Email' onChange={(e: any) => setEmail(e.target.value)} type='email'/>
                        )}
                        <Input value='username' id='username' label='Username' onChange={(e: any) => setUsername(e.target.value)} />
                        <Input value='password' id='password' label='Password' onChange={(e: any) => setPassword(e.target.value)} type='password'/>
                    </div>
                    <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                        {variant == 'login' ? 'Login' : 'Sign up'}
                    </button>
                    <p className="text-neutral-500 mt-12">
                        New to Daveflix?
                        <span onClick={ toggleVariant } className="text-white ml-1 hover:underline cursor-pointer">Create an account</span>
                    </p>
                </div>
            </div>
        </div>
      </div>  
    )
}

export default Auth