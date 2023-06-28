import SuperBase from "@/backend/supabase";


export const LoginWithEmail = (email: string) => {
    return SuperBase.auth.signInWithOtp({
        email,
    })
}
export const LoginWithPhone = (phone: string) => {
    return SuperBase.auth.signInWithOtp({
        phone
    })
}
export const LoginWithGoogle = () => {
    return SuperBase.auth.signInWithOAuth({
        provider: 'google'
    })
}
export const LoginWithPassword = (email: string, password: string) => {
    return SuperBase.auth.signInWithPassword({
        email,
        password
    })
}




export const CreateUserWithEmail = (email: string, password: string, phone: string, ExtraData: any) => {
    return SuperBase.auth.signUp({
        email,
        password,
        phone,
        options: {
            data: {
                ...ExtraData
            }
        }
    })
}

export const setToken = (token: string) => {
    localStorage.setItem("token", token)
}


export const GetUser = async () => {
    const d = await SuperBase.auth.getUser(localStorage.getItem("token") || "")
    return { "data": d, "additionalData": SuperBase.from("USER").select("*").eq("user", d.data.user?.id) }
}