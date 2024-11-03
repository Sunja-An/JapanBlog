"use client";

import React from "react";
import { TSignIn } from "../sign";
import { SignInAction } from "@/action/sign/sign-in.action";

export default function JapanBlog_SignIn_Page() {
  const [userInfo, setUserInfo] = React.useState<TSignIn>({
    email: "",
    password: "",
  });

  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const onClickSignInBtn = async (e: any) => {
    e.preventDefault();
    if (!emailRef.current || !passwordRef.current) {
      return false;
    }
    const body: TSignIn = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    setUserInfo(body);

    const res = await SignInAction(body);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full flex flex-col justify-start items-start gap-10">
        <div className="w-full flex flex-col justify-start items-start">
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            value={userInfo.email}
            ref={emailRef}
            placeholder="Enter Email"
            required
            className=""
          />
        </div>
        <div className="w-full flex flex-col justify-start items-start">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={userInfo.password}
            ref={passwordRef}
            placeholder="Enter Password"
            required
            className=""
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            type="button"
            onClick={onClickSignInBtn}
            className="w-24 h-12 flex justify-center items-center rounded-lg bg-slate-50 hover:scale-110 duration-300"
          >
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
}
