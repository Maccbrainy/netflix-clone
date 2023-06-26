import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { BsCheckCircle, BsCheckLg } from "react-icons/bs";

const SignUpPageHeader = () => {
    let navigate = useNavigate();

    const signOutFn = () => {
        localStorage.removeItem('token');
        navigate('/')
    }
    return (
        <header className="relative w-full h-24 border-b border-[#333] flex justify-center items-center px-6 sm:px-8 md:px-10 lg:px-14 mx-auto z-10">
            <div className="w-full flex flex-row justify-between items-center">
                <div><Link to="/">Logo</Link></div>
                <button onClick={signOutFn} title="Sign Out">Sign Out</button>
            </div>
        </header>
    )
}
const SignUpPage = () => {
    let navigate = useNavigate();
    const nextToSignUp = () => {
        navigate("/sign-up/planform");
    }
    return(
        <div className="w-full max-w-[350px] h-auto flex flex-col justify-center items-center mt-10 gap-5">
            <BsCheckCircle fontSize={40} color={'#e50914'}/>
            <span>STEP 2 OF 2</span>
            <h1 className="flex flex-col text-3xl font-medium">Choose your plan.</h1>
            <div className="flex flex-col gap-4 w-[300px]">
                <SubscriptionDescription description="No commitments, cancel anytime." />
                <SubscriptionDescription description="Everything on Netflix clone is free." />
                <SubscriptionDescription description="No commitments, cancel anytime." />
            </div>
            <button onClick={nextToSignUp} type="button" title="Next" className="bg-[#e50914] w-full px-6 h-16 text-2xl mt-1">Next</button>
        </div>
    )
}
const SubscriptionDescription = ({description}:any) => {
    return(
        <div className="flex flex-row space-x-4 items-center">
            <BsCheckLg fontSize={24} color={'#e50914'}/>
            <span className="text-base font-normal">{description}</span>
        </div>
    )
}
export default function TheSignUpPage(){
    const { pathname } = useLocation();

    return(
        <>
        <SignUpPageHeader />
        <section className="relative w-full">
            <div className="relative w-full flex flex-col justify-center items-center">
                {
                    (pathname == '/sign-up') && (
                      <SignUpPage />
                    )
                }
                <Outlet />
            </div>
        </section>
        </>
        
    )
}
