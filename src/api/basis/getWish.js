import axios from "../axios";

const getWish = async () => {
    return axios.get('/wish_items/'
        , { headers: { authorization: localStorage.getItem("Authorization") } }
    )
}
export default getWish