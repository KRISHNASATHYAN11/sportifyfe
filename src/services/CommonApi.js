import axios from "axios";
// function (three para)
//create obj
// obj pass to axios
// axios return promise
// handle with then catch

const commonApi = async (method, url, reqBody,reqHeader) => {
  let configObj = {
    method: method,
    url: url,
    data: reqBody,
    // axios automatically provides application/json header, but if therer is any change we need to provide it , also token is passsed via header 
    headers : reqHeader
  };

   return await axios(configObj)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export default commonApi
