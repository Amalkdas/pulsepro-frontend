//this is where all the api function calls defined
//update
import { commonAPI } from "./commonAPI.js";
import { ServerURL } from "./ServerURL.js";

// adding workouts to json server

export const addworkoutapi = async (reqbody) => {
  return await commonAPI("post", `${ServerURL}/Workouts`, reqbody);
};

//getting the data from hworkouts

export const getfromworkoutapi = async (id) => {
  return await commonAPI("get", `${ServerURL}/Workouts/${id}`, "");
};

// //update details

export const updateapi = async (id, reqbody) => {
  return await commonAPI("put", `${ServerURL}/Workouts/${id}`, reqbody);
};

// so using put ( deleting each workouts )

export const removeapi = async (id, reqbody) => {
  return await commonAPI("put", `${ServerURL}/Workouts/${id}`, reqbody);
};
