"use server";

import { cookies } from "next/headers";

const cookie_store = cookies();

const SignOutAction = async () => {
  try {
    cookie_store.delete("access-token");
    cookie_store.delete("refresh-token");
  } catch (err: any) {
    return 400;
  }
};
