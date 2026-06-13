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

// UPDATED: Added page and limit parameters
export const getAllTurf = async (reqHeader, search, page, limit) => {
  return await commonApi(
    "get",
    `${BaseUrl}/getAllTurfs?search=${search}&page=${page}&limit=${limit}`,
    "",
    reqHeader,
  );
};

export const getLimitedTurfs = async () => {
  return await commonApi("get", BaseUrl + "/getLimitedTurfs", "");
};

export const getSingleTurf = async (id, reqHeader) => {
  return await commonApi(
    "get",
    `${BaseUrl}/${id}/getSingleTurf`,
    "",
    reqHeader,
  );
};

export const updateprofile = async (id, reqBody, reqHeader) => {
  return await commonApi(
    "patch",
    `${BaseUrl}/${id}/updateProfile`,
    reqBody,
    reqHeader,
  );
};

export const addEvent = async (reqBody, reqHeader) => {
  return await commonApi("post", BaseUrl + "/addEvent", reqBody, reqHeader);
};

// ... keep your other functions unchanged ...
export const getAllEvent = async (reqHeader, search, page, limit) => {
  return await commonApi(
    "get",
    `${BaseUrl}/getAllEvents?search=${search}&page=${page}&limit=${limit}`,
    "",
    reqHeader,
  );
};

export const getLimitedEvents = async () => {
  return await commonApi("get", BaseUrl + "/getLimitedEvents", "");
};

export const getSingleEvent = async (id, reqHeader) => {
  return await commonApi(
    "get",
    `${BaseUrl}/${id}/getSingleEvent`,
    "",
    reqHeader,
  );
};

export const getAllUsers = async (reqHeader) => {
  return await commonApi("get", `${BaseUrl}/getAllUsers`, "", reqHeader);
};

export const updateFollow = async (id, reqHeader) => {
  return await commonApi("put", `${BaseUrl}/users/${id}/follow`, {}, reqHeader);
};

export const updateUnFollow = async (id, reqHeader) => {
  return await commonApi("put", `${BaseUrl}/users/${id}/unfollow`, {}, reqHeader);
};

export const MakeBooking = async (reqBody, reqHeader) => {
  return await commonApi("post", `${BaseUrl}/makeBooking`, reqBody, reqHeader);
};

export const MakeEventBooking = async (reqBody, reqHeader) => {
  return await commonApi("post", `${BaseUrl}/eventBooking`, reqBody, reqHeader);
};

export const createTeam = async (reqBody, reqHeader) => {
  return await commonApi("post", `${BaseUrl}/addTeam`, reqBody, reqHeader);
};

export const addPost = async (reqBody, reqHeader) => {
  return await commonApi("post", `${BaseUrl}/addPost`, reqBody, reqHeader);
};

export const getIndPost = async (reqHeader) => {
  return await commonApi("get", `${BaseUrl}/getIndPost`, "", reqHeader);
};

export const getAllPost = async (reqHeader) => {
return await commonApi( "get",  `${BaseUrl}/allPost`, "", reqHeader);
};

export const addTeamMember = async (reqBody, reqHeader) => {
  return await commonApi(
    "post",
    `${BaseUrl}/addTeamMember`,
    reqBody,
    reqHeader
  );
};