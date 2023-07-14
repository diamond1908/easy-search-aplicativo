import axios from "axios";

const api = create({
    baseURl: 'https://localhost:8080',
    headers:{"Content-type":  "application/json"}
})

export default api;