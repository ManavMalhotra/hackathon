import axios from 'axios'

//change this backend api url || TO DO 
let baseUrl = "http://localhost:3001/api/register"

const registerHandle = async (info)=>{
    let response = await axios.post(baseUrl,info)
    return response.data
}

export default registerHandle