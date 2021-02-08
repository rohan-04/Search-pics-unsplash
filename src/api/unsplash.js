import axios from "axios"

// base setup
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID JkLsdEi07kdP9z2-tQlM-D6KmRsH3GyABQpViPDodqA"
    }
})