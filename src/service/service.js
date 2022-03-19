import axios from 'axios'

const baseDomain = "http://localhost:8080"
// const baseDomain = 'https://front-api-rest-vuej.herokuapp.com'
const baseURL = `${baseDomain}`


export default axios.create({
    baseURL,
    headers:{    
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept':'application/json',
        
    },
})

