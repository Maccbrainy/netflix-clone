import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../inputForm";
import { EmailPassword } from "../../types";
import { IsLoading } from "../loaders";
import { createNewUserAndAsignTokenOrLogInExistingUser } from "../../api/user.api";

const SignUpPassword = () => {
    const [isError, setIsError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [inputData, setInputData] = useState<EmailPassword>({
        password: "",
        email: localStorage.getItem('userEmail') as string,
    });
    let navigate = useNavigate();
    
    const handleChange = (event: { target: { name: string, value: string}}) => {
        setIsError("");
        setInputData((prevState) => ({...prevState, [event.target.name]: event.target.value}))
    }
    const gotToPlanForm = async (event: { preventDefault: () => void }) => {
        event.preventDefault();

        const { email, password } = inputData;

        if (!password || !email) return;

        setIsLoading(true);

        const { success, error} = await createNewUserAndAsignTokenOrLogInExistingUser({...inputData});

        setIsLoading(false);       

        if (success && success.accessToken) {
            localStorage.removeItem('userEmail'); 
            localStorage.setItem('token', success.accessToken);
            navigate('/sign-up');
            return;
        }
        setIsError(error?.message);
        return;
    }
    return(
        <div className="w-full max-w-md h-auto flex flex-col justify-start mt-10 gap-4">
            <span>STEP 1 OF 2</span>
            <div className="flex flex-col text-3xl font-medium gap-1">
                <h1>Welcome!</h1>
                <h1>Are you just joining, it is easy</h1>
            </div>
            <span className="text-sm">Enter your password and you will be watching in no time</span>
            <div className="flex flex-col">
                <label>Email</label>
                <span>{inputData.email}</span>
            </div>
            <form onSubmit={gotToPlanForm} className="w-full flex flex-col gap-6">
                <InputForm errorMessage={isError} type="password" name="password" placeholder="Your password" handleChange={handleChange} className={`bg-transparent h-14 border`} />
                <button type="submit" title="Next" className="bg-[#e50914] px-6 h-16 text-2xl outline-none hover:bg-red-600" disabled={isLoading ? true : false}>
                    {
                        isLoading ? (<IsLoading height={'h-6'} width={'w-6'} />) : (<span>Next</span>)
                    }
                </button>
            </form>
        </div>
    )
}
export default SignUpPassword;