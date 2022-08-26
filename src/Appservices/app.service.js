//we make this file, to save time.
// later on you only have to import this file and you can use all, get, put, post, delete

import Axios from "axios";
import API_URL from "./api.URL";
import authHeader from "./auth.header";

Axios.defaults.headers.common = authHeader();

const get = async (url) => {
  return await Axios.get(`${API_URL}/`+url)
}


//endpoint - is what you want to get/create/update. artists, songs, or whatever you want.
const getList = (endpoint) => {
  return Axios.get(`${API_URL}/${endpoint}`, {
    //checks if user is logged in, if neccesary 
    headers: authHeader(),
  });
};

//getting details of one specific
const getDetails = (endpoint, id) => {
  //imorting appservice first ofc, and than 
  //appservice.get("artist", 25)
  //artist is what you want to get, and 25 is the id
  return Axios.get(`${API_URL}/${endpoint}/${id}`, {
    headers: authHeader(),
  });
};

const create = (endpoint, data) => {
  //e - hvad er der vi laver
  //data- contains all info
  return Axios.post(`${API_URL}/${endpoint}`, data, {
    headers: authHeader(),
  });
};

//du sender username og password og du får token tilbage
//så er du logget ind
const login = async (username, password) => {
  return await Axios.post(`https://api.mediehuset.net/token`, { username, password });
};

//logout fjerner token fra databasen
//kræver at du har en logout på backend
const logout = async () => {
  return await Axios.post(`${API_URL}/logout`, {
    headers: authHeader(),
  });
};

// hvad er det du vil gerne update
// id på den du vil gerne opdatere
//data er den info du vil gerne opdatere. data er ny data
//f eks: artist, 5, John.
const update = (endpoint, id, data) => {
  return Axios.put(`${API_URL}/${endpoint}/${id}`, data, {
    headers: authHeader(),
  });
};

//den sletter bare. du skal nævne id på hvad du vil gerne slette
//remove (artist, 5)
const remove = (endpoint, id) => {
  return Axios.delete(`${API_URL}/${endpoint}/${id}`, {
    headers: authHeader(),
  });
};

//athering all of them so we have to export/import only one
const appService = {
  get,
  getList,
  getDetails,
  create,
  update,
  remove,
  login,
  logout,
};

export default appService;
//vi eksporterer dem allesammen, samtidig.