"use client";

import React from "react";
import { TSignIn } from "../sign";
import { SignInAction } from "@/action/sign/sign-in.action";
import { useRouter } from "next/navigation";

export default function JapanBlog_SignIn_Page() {
  const router = useRouter();

  const [userInfo, setUserInfo] = React.useState<TSignIn>({
    email: "",
    password: "",
  });

  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const onChangeEmail = () => {
    if (!emailRef.current) {
      return false;
    }
    setUserInfo({
      ...userInfo,
      email: emailRef.current.value,
    });
  };

  const onChangePassword = () => {
    if (!passwordRef.current) {
      return false;
    }
    setUserInfo({
      ...userInfo,
      password: passwordRef.current.value,
    });
  };

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

    // * Send Data
    const res = await SignInAction(body);
    if (res === 200) {
      router.push("/");
    } else {
      alert("Server Error");
    }
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
            onChange={onChangeEmail}
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
            onChange={onChangePassword}
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
