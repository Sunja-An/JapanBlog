"use server";

import BlogAPI from "@/server/Axios_instance";

// * Type
import { TSignIn } from "@/app/(sign)/sign";
import { GlobalErrorType } from "@/types/ErrorType";
import { cookies } from "next/headers";

const cookie_store = cookies();

export const SignInAction = async (body: TSignIn): Promise<GlobalErrorType> => {
  try {
    const res = await BlogAPI.post("/", JSON.stringify(body));
    if (res.status === 200) {
      cookie_store.set("access-token", res.headers["Authorization"]);
      cookie_store.set("refresh-token", res.data.cookies);
      return res.data;
    } else {
      return false;
    }
  } catch (err: any) {
    if (err.status === 401) {
      return 401;
    } else if (err.status === 400) {
      return 400;
    } else {
      return 500;
    }
  }
};
