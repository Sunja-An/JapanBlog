"use client";

import React from "react";
import { useRouter } from "next/navigation";

// * Type
import { TSignUp } from "@/app/(sign)/sign.d";
import { SignUpAction } from "@/action/sign/sign-up.action";
import Image from "next/image";

import EmailImage from "/public/svg/login/email.svg";
import PasswordImage from "/public/svg/login/password.svg";
import BoxChecked from "/public/svg/login/boxChecked.svg";
import Check from "/public/svg/login/Check.svg";

export default function JapanBlog_SignUp_Page() {
  const router = useRouter();
  const [userInfo, setUserInfo] = React.useState<TSignUp>({
    email: "",
    password: "",
    passwordCheck: "",
  });

  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const passwordCheckRef = React.useRef<HTMLInputElement>(null);

  const onClickSignUpBtn = async (e: any) => {
    e.preventDefault();
    if (
      !emailRef.current ||
      !passwordRef.current ||
      !passwordCheckRef.current
    ) {
      return false;
    }
    const body: TSignUp = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passwordCheck: passwordCheckRef.current.value,
    };
    setUserInfo(body);

    // * Send Information
    const res = await SignUpAction(body);
    if (res === 201) {
      router.push("/");
    } else if (res === 401) {
      alert("이미 사용중인 사용자가 있습니다.");
    } else {
      alert("Server Error");
    }
  };

  return (
    <div className="w-full h-fit flex justify-center items-center">
      <div className="w-full flex flex-col justify-start items-start gap-10">
        <div className="w-full flex flex-col justify-start items-start">
          <label htmlFor="">Email</label>
          <div className="relative w-full flex justify-start items-center">
            <Image
              src={EmailImage}
              alt="email"
              width={30}
              height={30}
              className="absolute left-5"
            />
            <input
              type="text"
              name="email"
              value={userInfo.email}
              ref={emailRef}
              placeholder="Enter email"
              required
              className="px-20 py-5"
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="">Password</label>
          <div className="relative w-full flex justify-start items-center">
            <Image
              src={PasswordImage}
              alt="password"
              width={30}
              height={30}
              className="absolute left-5"
            />
            <input
              type="password"
              name="password"
              value={userInfo.password}
              ref={passwordRef}
              placeholder="Enter email"
              required
              className="px-20 py-5"
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="">Password Check</label>
          <div className="relative w-full flex justify-start items-center">
            <Image
              src={Check}
              alt="check"
              width={30}
              height={30}
              className="absolute left-5"
            />
            <input
              type="text"
              name="passwordCheck"
              value={userInfo.passwordCheck}
              ref={passwordCheckRef}
              placeholder="Enter Password one more"
              required
              className="px-20 py-5"
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            type="submit"
            onClick={onClickSignUpBtn}
            className="w-24 h-12 flex justify-center items-center rounded-lg bg-slate-50 hover:scale-110 duration-300"
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
}
