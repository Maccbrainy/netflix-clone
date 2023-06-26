import { AnyListenerPredicate } from "@reduxjs/toolkit";
import { client } from ".";
import { ResponseData } from "../types";

export const findAllplans = async ():Promise<ResponseData> => {
    try {
        const { data } = await client().get('/subscriptions');
        return { success: { subscriptions: data }};
    } catch (error:any) {
        const { data } = error.response;
        return {error: data};
    }
}
export const createUserSubscriptionPlanAndActivateAccount = async (subscriptionId:string): Promise<ResponseData> => {
    try {
        const { data } = await client().post('/user-subscription-plan', {
            subscriptionId: subscriptionId
        });
        return { success: data};
    } catch (error: any) {
        const { data } = error.response;
        return {error: data};
    }
}