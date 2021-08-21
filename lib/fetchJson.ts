import { Console } from "console";

export default async function fetchJson(...args) {
  try {
    const response = await fetch(...args);

    // if the server replies, there's always some data in json
    // if there's a network error, it will throw at the previous line
    let data = ""
    if (response){
      data = await response.json();
      
      if (response.ok) {
        return data;
      }
    }else{

    }
    


    const error = new Error("用户名或者密码错误！");
    error.response = response;
    error.data = data;
    throw error;
  } catch (error) {
    if (!error.data) {
      error.data = { message: error.message };
    }
    throw error;
  }
}
