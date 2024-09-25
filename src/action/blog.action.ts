"use server";

import BlogAPI from "@/server/Axios_instance";

export const Get_Blog_List = async () => {
  try {
    const res = await BlogAPI.get("");
    if (res.status === 200) {
      return res.data;
    } else {
      return false;
    }
  } catch (err) {
    throw err;
  }
};

export const Get_Single_Blog = async (id: string) => {
  try {
    const res = await BlogAPI.get(`/${id}`);
    if (res.status === 200) {
      return res.data;
    } else {
      return false;
    }
  } catch (err) {
    throw err;
  }
};
