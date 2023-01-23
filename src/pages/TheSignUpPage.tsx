import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../components/inputForm";

export default function TheSignUpPage(){
    const [inputData, setInputData] = useState({
        password: "",
        email: localStorage.userEmail,
    })
    let navigate = useNavigate();
    const [isRequired, setIsRequired] = useState(false);
    const handleChange = (event: { target: { name: string, value: string}}) => {
        setInputData((prevState) => ({...prevState, [event.target.name]: event.target.value}))
    }
    const submitData = () => {
        const { password } = inputData;
        if (!password) {
            setIsRequired(true)
            return;
        }
        setIsRequired(false)
        localStorage.userPassword = inputData.password;
        navigate('/browse');

    }
    return(
        <>
        <header className="relative w-full h-24 border-b border-[#333] flex justify-center items-center px-6 sm:px-8 md:px-10 lg:px-14 mx-auto z-10">
            <div className="w-full flex flex-row justify-between items-center">
                <div><Link to="/">Logo</Link></div>
                <div><Link to="/login">Sign In</Link></div>
            </div>
        </header>
        <section className="relative w-full">
            <div className="relative w-full flex flex-col justify-center items-center">
                <div className="w-full max-w-md h-auto flex flex-col justify-start mt-10 gap-4">
                    <span>STEP 1 OF 1</span>
                    <div className="flex flex-col text-3xl font-medium gap-1">
                        <h1>Welcome!</h1>
                        <h1>Are you just joining, it is easy</h1>
                    </div>
                    <span>Enter your password and it's complete</span>
                    <div className="flex flex-col">
                        <label>Email</label>
                        <span>{inputData.email}</span>
                    </div>
                    <InputForm type="password" name="password" placeholder="Your password" handleChange={handleChange} className={`bg-transparent h-14 border ${isRequired && 'border-[#e50914]'}`} required={isRequired}/>
                    <button onClick={submitData} type="button" title="Next" className="bg-[#e50914] rounded-sm px-6 h-16 text-2xl">Next</button>
                </div>
            </div>
        </section>
        </>
        
    )
}
