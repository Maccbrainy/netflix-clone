import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/header";
import { HiOutlineChevronRight } from "react-icons/hi";
import InputForm from "../components/inputForm";

const imagebg = `https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/fe0d3631-4584-47e4-9cd7-ed68ba375830/NG-en-20221114-popsignuptwoweeks-perspective_alpha_website_small.jpg`

export default function TheHomePage() {
    const [inputData, setInputData] = useState({
        email: "",
        password: ""
    });
    const [isRequired, setIsRequired] = useState(false)
    const { pathname } = useLocation();
    const navigate = useNavigate()

    const handleChange = (event: { target: { name: string; value: string; } }) => {
        setInputData((prevState) => ({...prevState, [event.target.name]: event.target.value}) )
    }

    const submitGetStartedInputData = (event: { preventDefault: () => void; }) => {
        const {email} = inputData;

        event.preventDefault();
        if (!email) {
            setIsRequired(true)
            return
        };
        setIsRequired(false);
        localStorage.userEmail = email;
        navigate("/sign-up/password");
    }

    const signIn = () => {
        const { email, password} = inputData;
        const emailAddress = email || localStorage.userEmail
        const userPassword = password || localStorage.userPassword
        if (!emailAddress && !userPassword){
            setIsRequired(true);
            return
        }
        setIsRequired(false);
        navigate('/browse');
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
                                <div className="w-full h-16 lg:max-w-3xl flex flex-nowrap">
                                    <InputForm type="email" name="email" placeholder="Email Address" handleChange={handleChange} value={inputData.email} className="h-full text-[#333]" required={isRequired}/>
                                    <button onClick={submitGetStartedInputData} type="submit" title="Get started" className="flex flex-nowrap justify-center items-center h-full px-8 bg-[#e50914] text-xl font-medium whitespace-nowrap gap-3 outline-none hover:bg-red-600"><span>Get started </span><HiOutlineChevronRight/></button>
                                </div>
                            </div>
                            </div>
                        )
                    }
                    {
                        (pathname == '/login') && (
                            <div className="w-full max-w-md h-auto flex flex-col justify-start gap-8 bg-[#000000c9] p-16">
                                <h1 className="text-3xl font-medium">Sign In</h1>
                                <div className="flex flex-col gap-5">
                                    <InputForm type="email" name="email" placeholder="Email Address" handleChange={handleChange} value={localStorage.userEmail} className="h-14 bg-[#333] rounded-md" />
                                    <InputForm type="password" name="password" placeholder="Password" handleChange={handleChange} value={localStorage.userPassword} className="h-14 bg-[#333] rounded-md" />
                                </div>
                                <button onClick={signIn} type="button" title="sign in" className="bg-[#e50914] h-14 px-4 rounded-md mt-3">Sign In</button>
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
                <img className="w-full h-auto object-cover object-center" src={imagebg} alt="Netflix clone home background"/> 
            </div>
        </section>
        
        </>
        
    )
}