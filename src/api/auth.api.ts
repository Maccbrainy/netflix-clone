import { client } from ".";
import { EmailPassword, ResponseData } from "../types";

export const verifyAndAuthenticateLoginUser = async ({email, password}: EmailPassword): Promise<ResponseData> => {
    try {
        const { data: { accessToken } } = await client().post('/auth/login', {
            email: email,
            password: password
        });
        return { success: { accessToken: accessToken }};
    } catch (error: any) {
        const { data } = error.response;
        return {error: data};
    }
}