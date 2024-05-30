'use server'

import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "../appwrite";
import { ID } from "node-appwrite"
import { parseStringify } from "../utils";

export const signIn = async ({ email, password }: signInProps) => {
    try {
        // mutation /database / make fetch
        const { account } = await createAdminClient();

        const response = await account.createEmailPasswordSession(email, password);

        return parseStringify(response);

    } catch (error) {
        console.error('Error', error);
    }
}

export const signUp = async (userData: SignUpParams) => {
    try {
        // mutation /database / make fetch
        // create a user account
        const { email, password, firstName, lastName } = userData
        const { account } = await createAdminClient();
        // src/lib/server/appwrite.jsautoautoautoautoautoautoautoautoauto
        const newUserAccount = await account.create(
            ID.unique(),
            email,
            password,
            `${firstName} ${lastName}`);

        const session = await account.createEmailPasswordSession(email, password);

        cookies().set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });
        return parseStringify(newUserAccount);

    } catch (error) {

    }
}

// ... your initilization functions
export async function getLoggedInUser() {
    try {
        const { account } = await createSessionClient();
        const user = await account.get();
        return parseStringify(user);

    } catch (error) {
        return null;
    }
}

export const logoutAccount = async () => {
    try {
        const { account } = await createSessionClient();

        cookies().delete('appwirte-session');

        return await account.deleteSession('current');
    } catch (error) {

    }
}