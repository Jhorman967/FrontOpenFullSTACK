import React from "react";
import axios from "axios";

// const baseUrl = "http://localhost:8080/api/persons"

const baseUrl = "https://part-3b-bitter-wave-3791-snowy-frost-665.fly.dev/api/persons"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = async newObject => {
    const request = axios.post(baseUrl, newObject)
    const response = await request;
    return response.data;
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`,newObject)
    return request.then(response => response.data)
}

const delet = (id) =>{
    const request = axios.delete(`${baseUrl}/${id}`)
    console.log(request)
    console.log(request.data)
    return request.then(response => response.data)

} 

export default {getAll, create, update, delet}