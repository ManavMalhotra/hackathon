import axios from 'axios'

//change this backend api url || TO DO 
let baseUrl = "https://manavmalhotra-special-space-waffle-wx7j96jvg452v46r-3001.preview.app.github.dev/api/login"

const loginHandle = async (info)=>{
    let response = await axios.post(baseUrl,info)
    return response.data
}

export default loginHandle