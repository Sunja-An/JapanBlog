"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// * Action
import { SignInAction } from "@/action/sign/sign-in.action";

// * Type
import { TSignIn } from "@/app/(sign)/sign.d";

import Logo from "/public/image/LogoImage.png";
import Email from "/public/svg/login/email.svg";
import Password from "/public/svg/login/password.svg";

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

  const onClickLogo = () => {
    router.push("/");
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
    <div className="w-full h-full flex justify-center items-center">
      <div className="px-5 py-5 w-full flex flex-col justify-center items-center gap-10">
        <div className="w-full h-fit flex justify-center items-center">
          <Image
            src={Logo}
            alt="Logo"
            width={160}
            height={160}
            className="hover:scale-110 duration-300 rounded-full cursor-pointer"
            onClick={onClickLogo}
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <span className="font-pretendard font-bold text-5xl text-black uppercase">
            welcome
          </span>
        </div>
        <div className="relative w-1/2 flex flex-col justify-center items-center gap-5">
          <Image
            src={Email}
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
            onChange={onChangeEmail}
            placeholder="Enter Email"
            required
            className="px-16 py-5 w-full h-14"
          />
        </div>
        <div className="relative w-1/2 flex flex-col justify-center items-center gap-5">
          <Image
            src={Password}
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
            onChange={onChangePassword}
            placeholder="Enter Password"
            required
            className="px-16 py-5 w-full h-14"
          />
        </div>

        <div className="w-full flex justify-center items-center">
          <button
            type="button"
            onClick={onClickSignInBtn}
            className="w-5/6 h-12 flex justify-center items-center rounded-lg bg-slate-50 hover:scale-105 duration-300"
          >
            CONTINUE
          </button>
        </div>
        <div className="relative w-full flex flex-col justify-center items-center">
          <div className="w-5/6 h-[1px] bg-slate-100 rounded-lg" />
          <div className="absolute w-20 h-10 flex justify-center items-center bg-white">
            <span className="font-pretendard font-light text-xs text-black">
              OR
            </span>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <SocialLoginBox />
        </div>
      </div>
    </div>
  );
}

import Instagram from "/public/login/instagram/Gradient/Instagram_Glyph_Gradient.svg";
import Google from "/public/login/google/svg/light/web_light_rd_ctn.svg";
import Github from "/public/login/github/github-mark.svg";

function SocialLoginBox() {
  return (
    <div className="w-full h-fit flex justify-center items-center gap-5">
      <div className="">
        <Image src={Instagram} alt="Instagram" width={50} height={50} />
      </div>
      <div className="">
        <Image src={Google} alt="Google" width={50} height={50} />
      </div>
      <div className="">
        <Image src={Github} alt="Github" width={50} height={50} />
      </div>
    </div>
  );
}
