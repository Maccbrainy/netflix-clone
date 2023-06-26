import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/header";
import { HiOutlineChevronRight } from "react-icons/hi";
import InputForm from "../components/inputForm";
import NetflixBg from "../assets/netflix-bg.jpg";
import { IsLoading } from "../components/loaders";
import { EmailPassword } from "../types";
import { findUserByEmail } from "../api/user.api";
import { verifyAndAuthenticateLoginUser } from "../api/auth.api";

export default function TheHomePage() {
    (document.title ='Netflix Clone')
    const [inputData, setInputData] = useState<EmailPassword>({
        email: "",
        password: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState("");
    const { pathname } = useLocation();
    const navigate = useNavigate()

    const handleChange = (event: { target: { name: string; value: string; } }) => {
        setIsError("");
        setInputData((prevState) => ({...prevState, [event.target.name]: event.target.value}) )
    }

    const getStartedFn = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
            
            const { email } = inputData;
            if (!email ) return ;

            setIsLoading(true);

            localStorage.setItem('userEmail', email);
            
            const { success, error} = await findUserByEmail(email);
            
            setIsLoading(false);
            
            if (success){
                
                const { message, statusCode } = success;
                if (statusCode === 201 && message === 'This is an activated account') return navigate("/login");
            
                navigate("/sign-up/password");
                return;
            }
            setIsError(error?.message[0]);
            return;
    }

    const signInFn = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const { email, password} = inputData;
        if (!email && !password) return;

        setIsLoading(true);
        
        localStorage.removeItem('userEmail');
        const { success, error} = await verifyAndAuthenticateLoginUser({...inputData})

        setIsLoading(false);

        if (success && success.accessToken) {
            localStorage.removeItem('userEmail'); 
            localStorage.setItem('token', success.accessToken);
            return navigate('/browse');
        }
        return setIsError(error?.message);
        
    }

    return(
        <>
        <NavBar/>
        <section className="relative w-full text-white">
            <div className="relative w-full flex flex-col justify-center items-center h-screen overflow-hidden">
                <div className="absolute w-full h-full top-0 right-0 left-0 bottom-0 bg-gradient-to-b
                from-[#141414] to-transparent"></div>
                <div className="absolute w-full h-1/2 right-0 left-0 bottom-0 bg-gradient-to-t
                from-[#141414] to-transparent"></div>
                <div className="absolute w-full h-auto flex flex-col justify-center items-center px-6 sm:px-8 md:px-10 lg:px-14 gap-6">
                    {
                        (pathname == '/') && (
                            
                            <div className="w-full h-auto flex flex-col justify-center items-center">
                            <div className="flex flex-col gap-3">
                                <h1 className="max-w-[600px] text-center text-5xl font-semibold">Unlimited movies, TV shows and more</h1>
                                <h3 className="text-2xl text-center">Watch anywhere cancel anytime</h3>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center gap-3">
                                <h4 className="text-center text-lg">Ready to watch? Enter your email to create or restart your membership.</h4>
                                <form onSubmit={getStartedFn} className="w-full h-16 lg:max-w-3xl flex flex-nowrap">
                                    <InputForm errorMessage={isError} type="email" name="email" placeholder="Email Address" handleChange={handleChange} value={inputData.email} className="w-[inherit] h-full text-[#333]" />
                                    <button type="submit" title="Get started" className="flex flex-nowrap justify-center items-center w-[30%] h-full px-8 bg-[#e50914] text-xl font-medium whitespace-nowrap gap-3 outline-none hover:bg-red-600" disabled={isLoading ? true : false}>
                                        {
                                            isLoading ? (<IsLoading height={'h-6'} width={'w-6'}/>) : (<><span>Get started </span><HiOutlineChevronRight/></>)
                                        }
                                    </button>
                                </form>
                            </div>
                            </div>
                            
                        )
                        
                        }
                    {
                        (pathname == '/login') && (
                            <div className="w-full max-w-md h-auto flex flex-col justify-start gap-8 bg-[#000000c9] p-16">
                                <div className="flex flex-col space-y-2">
                                    <h1 className="text-3xl font-medium">Welcome back!</h1>
                                    <h1>Sign in to your account</h1>
                                </div>
                                <form onSubmit={signInFn} className="flex flex-col gap-5">
                                    <InputForm type="email" name="email" placeholder="Email Address" handleChange={handleChange} value={inputData.email} className="h-14 bg-transparent border" />
                                    <InputForm errorMessage={isError} type="password" name="password" placeholder="Password" handleChange={handleChange} className="h-14 bg-transparent border" />
                                    <button type="submit" title="sign in" className="bg-[#e50914] h-14 px-4 mt-3 hover:bg-red-600" disabled={isLoading ? true : false}>
                                        {
                                            isLoading ? (<IsLoading width="w-6" height="h-6" title="Signing in..." />) :
                                            'Sign In'
                                        }
                                    </button>
                                </form>
                                <div>
                                    <span className="flex whitespace-nowrap gap-1">
                                    <span className="text-base font-normal text-gray-500">New to Netflix Clone?</span>
                                    <span className="hover:underline"><Link to={'/'}>Sign up now.</Link></span> 
                                    </span>
                                </div>
                            </div>
                        )
                    }
                </div>
                <img className="w-full h-auto object-cover object-center" src={NetflixBg} alt="Netflix clone home background"/> 
            </div>
        </section>
        
        </>
        
    )
}