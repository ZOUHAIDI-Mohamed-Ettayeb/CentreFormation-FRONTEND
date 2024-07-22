const {default: axiosClient} = require("./axiosClient");

const getLastestFormations = ()=>axiosClient.get('/formations?populate=*')
const getFormationById = (id)=>axiosClient.get(`/formations/${id}?populate=*`)


export default {
    getLastestFormations,
    getFormationById
}