export interface EmailPassword {
    email: string;
    password: string;
}
export interface SubscriptionPlan{
    ID: string;
    subscriptionId: string;
    type: string;
    timeDurationAmount: number;
    timeDurationUnit: string;
    amount: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ResponseData {
    success?: {
        message?: string;
        statusCode?: number;
        subscriptions?: SubscriptionPlan[];
        accessToken?: string;
    };
    error?: {
        message: any;
        statusCode: number;
    };
}

