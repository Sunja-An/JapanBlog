"use server";

import BlogAPI from "@/server/Axios_instance";

// * Types
import { GlobalErrorType } from "@/types/ErrorType";
import { TSignUp } from "@/app/(sign)/sign";

export const SignUpAction = async (body: TSignUp): Promise<GlobalErrorType> => {
  try {
    const res = await BlogAPI.post("/api/sign-up", JSON.stringify(body));
    if (res.status === 201) {
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
