import axios from 'axios'

const baseDomain = "https://front-api-rest-vuej.herokuapp.com"
// const baseDomain = 'https://api-rest-full-emad.herokuapp.com'
const baseURL = `${baseDomain}`


export default axios.create({
    baseURL,
    headers:{    
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept':'application/json'
        
    },
})

