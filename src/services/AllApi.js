import { BaseUrl } from "./BaseURL";
import commonApi from "./CommonApi";

export const registerUser = async (reqBody) => {
  return await commonApi("post", BaseUrl + "/registerUser", reqBody);
};

export const loginUser = async (reqBody) => {
  return await commonApi("post", BaseUrl + "/loginUser", reqBody);
};

export const googleAuth = async (reqBody) => {
  return await commonApi("post", BaseUrl + "/googleAuth", reqBody);
};

export const addTurf = async (reqBody, reqHeader) => {
  return await commonApi("post", BaseUrl + "/addTurf", reqBody, reqHeader);
};

export const getAllTurf = async(reqHeader,search)=>{
    return await commonApi('get',`${BaseUrl}/getAllTurfs?search=${search}`,"",reqHeader)
}

export const getLimitedTurfs = async()=>{
  return await commonApi('get',BaseUrl + "/getLimitedTurfs","")
}

export const getSingleTurf = async(id,reqHeader)=>{
  return await commonApi('get',`${BaseUrl}/${id}/getSingleTurf`,"",reqHeader)
}


export const updateprofile = async(id,reqBody,reqHeader)=>{
  return await commonApi('patch',`${BaseUrl}/${id}/updateProfile`,reqBody,reqHeader)

}

export const addEvent = async (reqBody, reqHeader) => {
  return await commonApi("post", BaseUrl + "/addEvent", reqBody, reqHeader);
};


export const getAllEvent = async(reqHeader,search)=>{
    return await commonApi('get',`${BaseUrl}/getAllEvents?search=${search}`,"",reqHeader)
}


export const getLimitedEvents = async()=>{
  return await commonApi('get',BaseUrl + "/getLimitedEvents","")
}


export const getSingleEvent = async(id,reqHeader)=>{
  return await commonApi('get',`${BaseUrl}/${id}/getSingleEvent`,"",reqHeader)
}


export const getAllUsers = async (reqHeader) => {
  return await commonApi("get", `${BaseUrl}/getAllUsers`, "", reqHeader);
};

export const updateFollow = async(id,reqHeader)=>{
  return await commonApi('put',`${BaseUrl}/${id}/follow`,"",reqHeader)

}

export const updateUnFollow = async(id,reqHeader)=>{
  return await commonApi('put',`${BaseUrl}/${id}/unfollow`,"",reqHeader)

}

export const MakeBooking = async(reqBody,reqHeader)=>{
  return await commonApi ('post',`${BaseUrl}/makeBooking`,reqBody,reqHeader )
}

export const MakeEventBooking = async(reqBody,reqHeader)=>{
  return await commonApi ('post',`${BaseUrl}/eventBooking`,reqBody,reqHeader )
}

export const createTeam = async (reqBody, headers) => {
  return await commonApi(
    "post",
    `${BaseUrl}/create-team`,
    reqBody,
    headers
  );
};

