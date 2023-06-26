import { client } from ".";
import { EmailPassword, ResponseData } from "../types";

export const findUserByEmail = async (emailAddress: string):Promise<ResponseData> => {
    try {
        const { data } = await client().post('/users/user',{
            email: emailAddress
        });
        return { success: data};
    } catch (error:any) {
        const { data } = error.response;
        return { error: data};
    }
}

export const createNewUserAndAsignTokenOrLogInExistingUser = async ({email, password}:EmailPassword):Promise<ResponseData> => {
    try {
        const { data: { accessToken }} = await client().post('/users',{
            email: email,
            password: password,
        });
        return { success: {accessToken: accessToken } };
    } catch (error: any) {
        const { data } = error.response;
        return { error: data};
    }
}