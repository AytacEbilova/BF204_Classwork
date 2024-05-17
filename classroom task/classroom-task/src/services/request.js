import { BASE_URL } from "./constant.js";
import axios from "axios";

export async function getAll(endpoint) {
    try {
        const response= await axios.get(BASE_URL + endpoint);
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function getOne(endpoint, id) {
    try {
        console.log(BASE_URL + endpoint + `/${id}`);
       const response= await axios.get(BASE_URL + endpoint + `/${id}`);
       return response.data;
    } catch (error) {
        return error;
    }
}

export async function deleteOne(endpoint, id) {
    try {
        return await axios.delete(BASE_URL + endpoint + `/${id}`);
    } catch (error) {
        return error;
    }
}

export async function post(endpoint, payload) {
    try {
        const response = await axios.post(BASE_URL + endpoint, payload);
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function putOne(endpoint, id, payload) {
    try {
        return await axios.put(BASE_URL + endpoint + `/${id}`, payload);
    } catch (error) {
        return error;
    }
}

export async function patchOne(endpoint, id, payload) {
    try {
        const response= await axios.patch(BASE_URL + endpoint + `/${id}`, payload);
        return response.data;
    } catch (error) {
        return error;
    }
}