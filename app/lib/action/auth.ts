"use server"
import { signIn, signOut } from "@/auth";
export const login = async () => {
    const a = await signIn("google", { redirectTo: "/" })
    console.log(a)
}


export const logout = async () => {
    await signOut();
}
