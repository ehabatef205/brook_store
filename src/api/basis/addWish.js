import axios from "../axios";

const addWish = async (product_id) => {
    return axios.post('/wish_items/create', {
        product_id: product_id,
    }
        , { headers: { authorization: localStorage.getItem("AuthBrook") } }
    )
}
export default addWish