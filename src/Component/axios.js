import axios from 'axios'
const instance=axios.create({
    baseURL:'https://tinder-cloyf.herokuapp.com'
})

export default instance;