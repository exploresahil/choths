import SuperBase from "@/backend/supabase";
import { Database } from "../types";

export const addUserData = (
    user: Database['public']['Tables']['USER']['Insert']
) => {

    return SuperBase.from("USER").insert(user)
}
export const UpdateUserData = (
    user_id: string,
    user: Database['public']['Tables']['USER']['Update']
) => {
    return SuperBase.from("USER").update(user).eq("id", user_id)
}
export const DeleteUserData = (user_id: string) => {
    return SuperBase.from("USER").delete().eq("id", user_id)
}
export const getUserData = (user_id: string) => {
    return SuperBase.from("USER").select("*").eq("id", user_id)
}