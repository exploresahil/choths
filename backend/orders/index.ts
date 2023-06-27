import SuperBase from "@/backend/supabase";
import { Database } from "@/backend/types"

// TODO make all CRUD op for User  Orders data with mapping user
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
export const CancelOrder = (order_id: string) => { }
export const UpdateOrder = (order_id: string, updateObject: Database['public']['Tables']['Order']['Update']) => { }
export const getOrders = () => {
    return SuperBase.from("Order").select("*")
}
export const getOrdersId = (order_id: string) => {
    return SuperBase.from("Order").select("*").eq("id", order_id)
}

//those functions use to cart
export const AddCartOrder = (product_id: string, user_id: string, how_many: number) => {

}
export const RemoveCartOrder = (
    id: string
) => {
    return SuperBase.from("Cart").delete().eq("id", id)

}
export const UpdateCartOrder = (
    id: string,
    data: any
) => {

    return SuperBase.from("Cart").update(data).eq("id", id).select("*")
}