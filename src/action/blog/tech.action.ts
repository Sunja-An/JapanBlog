"use server";

import { BlogAPI } from "@/server/Axios_instance";

export const Get_Tech_Blog_List = async () => {
  try {
    const res = await BlogAPI.get("/");
    if (res.status === 200) {
      return res.data;
    } else {
      return { errorCode: 500, message: "Server Error" };
    }
  } catch (err: any) {
    if (err.status === 400) {
      return { errorCode: 400, message: "Developer Error" };
    } else {
      return { errorCode: 404, message: "This API cannot operate" };
    }
  }
};

export const Get_Single_Tech_Blog = async () => {
  try {
    const res = await BlogAPI.get("/");
    if (res.status === 200) {
      return res.data;
    } else {
      return { errorCode: 500, message: "Server Error" };
    }
  } catch (err: any) {
    if (err.status === 400) {
      return { errorCode: 400, message: "Developer Error" };
    } else {
      return { errorCode: 404, message: "This API cannot operate" };
    }
  }
};
