import axios from "../axios";

const addCart = async (product_id, quantity) => {
    return axios.post('/cart_items/create', {
        product_id: product_id,
        quantity: 1
    }
        , { headers: { authorization: localStorage.getItem("AuthBrook") } }
    )
}
export default addCart