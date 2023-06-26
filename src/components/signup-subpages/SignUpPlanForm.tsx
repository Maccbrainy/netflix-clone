import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserSubscriptionPlanAndActivateAccount, findAllplans } from "../../api/subscriptions.api";
import { IsLoading } from "../loaders";
import { SubscriptionPlan } from "../../types";

const SignUpPlanForm = () => {
    (document.title ='Netflix Clone: Subscription plans');
    
    let navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [isActivating, setIsActivating] = useState(false);
    const [allSubscriptionPlans, setAllSubscriptionPlans] = useState<SubscriptionPlan[]>([]);
    const [subscriptionPlan, setSubscriptionPlan] = useState<SubscriptionPlan>();

    const fetchSubscriptionPlans = async () => {
        setIsLoading(true);
        const {success, error } = await findAllplans();
        setIsLoading(false);
        if (success && success.subscriptions){
            const { subscriptions } = success;
            setSubscriptionPlan(subscriptions[1]);
            setAllSubscriptionPlans(subscriptions);
            return;
        }
        console.log("error:", error);
    }
    const signUpMembership = async (subscriptionPlan: SubscriptionPlan) => {
        setIsActivating(true);
        const { subscriptionId } = subscriptionPlan;
        const {success, error} = await createUserSubscriptionPlanAndActivateAccount(subscriptionId)
        setIsActivating(false);
        if (success){
            navigate('/browse');
            return;
        };
        console.log("error:", error);
        return;
    }

    useEffect(()=> {
        fetchSubscriptionPlans();
    },[]);

    return(
        <div className="w-full max-w-4xl h-auto flex flex-col justify-start mt-10 gap-4">
            <span>STEP 2 OF 2</span>
            <div className="flex flex-col text-3xl font-medium gap-1">
                <h1>Choose the plan that’s right for you!</h1>
                <div className="w-[inherit] flex flex-col lg:flex-row gap-5 py-8">
                    {
                        isLoading ? (<IsLoading width={'w-20'} height={'h-20'} />) : 

                        (allSubscriptionPlans.map((plan) => 
                        <div onClick={() => setSubscriptionPlan(plan)} key={plan.subscriptionId} className={`w-full flex items-start justify-start p-3 gap-5 text-sm h-auto border border-[#333] cursor-pointer transition-all hover:border-[#707070] ${subscriptionPlan === plan ? 'border-[#707070]' : 'border-[#333]'}`}>
                            <div className="flex justify-center items-center w-5 h-5 rounded-full border">
                                {
                                    subscriptionPlan === plan && <div className="w-[70%] h-[70%] rounded-full bg-[#e50914]"></div>
                                }
                            </div>
                            <div className="w-[80%] flex flex-col">
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-xl">{plan.type}</h1>
                                    <div className="flex flex-nowrap space-x-1">
                                        <span>N{plan.amount}</span>
                                        <span> / {`${plan.timeDurationAmount} ${plan.timeDurationUnit}`}</span>
                                    </div>
                                </div>
                                <p className="text-[11.5px] pt-2 tracking-wide">{plan.description}</p>
                            </div>
                        </div>
                        ))
                    }
                </div>
                {
                    !isLoading && (<button onClick={() => signUpMembership(subscriptionPlan as SubscriptionPlan)} type="button" title="Start Membership" className="bg-[#e50914] hover:bg-red-600 px-6 h-16 text-2xl">
                        {
                            isActivating ? <IsLoading width="w-6" height="h-6" title="Activating..."/> : "Start Membership"
                        }
                    </button>)
                }
            </div>
        </div>
    )
}
export default SignUpPlanForm;