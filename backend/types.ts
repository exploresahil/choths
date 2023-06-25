import { User as UserType } from "@supabase/supabase-js"
export interface User extends UserType {
    address: string
}
export interface Order {
    user: User,
    id: string,

}