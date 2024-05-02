import { BASE_URL } from "./constant";
import axios from 'axios';
//getAll
const getAllProducts= async ()=>{
    try{
        const response=await axios.get(`${BASE_URL}/products`);
        return response.data;
    }
    catch(err){
        console.log(err.message);
    }
}
//get data by id

const getOneProductById = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/products/${id}`);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };
  
  //delete data by id
  
  const deleteProducts = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/products/${id}`);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  };
  
  //post new customers
  
  const addNewProducts = async (payload) => {
    try {
      const response = axios.post(`${BASE_URL}/products`, payload);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  };
  //update customer by id
  
  const uptadeArtist = async (id, payload) => {
    try {
      const response = axios.patch(`${BASE_URL}/products/${id}`, payload);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export {
    getAllProducts,
    getOneProductById,
    deleteProducts,
    uptadeArtist,
    addNewProducts
  };