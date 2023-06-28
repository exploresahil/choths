import SuperBase from "@/backend/supabase";
import { Database } from "@/backend/types"

//those functions use to order
/**
 * 
 * @param {string} product_id
 * @param {Database['public']['Tables']['USER']['Row']} user 
 * @returns {Promise<any>} Order
 * ```ts
 * //how to use
 * await makeOrder(product_id,{...userData}).then((data)=>{
 * //handel data
 * },(error)=>{
 * //handel error
 * })
 * 
 * ```
 */
export const makeOrder = async (product_id: string, user: Database['public']['Tables']['USER']['Row']): Promise<any> => {
    return await SuperBase.from("Order").insert({
        product: product_id,
        user: user.id,
        cancel: false
    }).select()
}
export const CancelOrder = async (order_id: string) => {
    return await SuperBase.from("Order").update({
        cancel: true,
    }).eq("id", order_id)
}
export const UpdateOrder = async (order_id: string, updateObject: Database['public']['Tables']['Order']['Update']) => {
    return await SuperBase.from("Order").update(updateObject).eq("id", order_id)
}
export const getOrders = (user_id: string) => {
    return SuperBase.from("Order").select("*").eq("user", user_id)
}
export const getOrdersId = (order_id: string) => {
    return SuperBase.from("Order").select("*").eq("id", order_id)
}

//those functions use to cart
export const AddCartOrder = (product_id: string, user_id: string, how_many: number) => {
    return SuperBase.from("Cart").insert({
        how_many,
        product: product_id,
        user: user_id
    })
}
export const RemoveCartOrder = (
    id: string
) => {
    return SuperBase.from("Cart").delete().eq("id", id)

}
export const UpdateCartOrder = (
    id: string,
    data: Database['public']['Tables']['Cart']['Update']
) => {

    return SuperBase.from("Cart").update(data).eq("id", id).select("*")
}