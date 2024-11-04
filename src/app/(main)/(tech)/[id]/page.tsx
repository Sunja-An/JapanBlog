import TechPostHeader from "@/layout/techBlog/TechPostHeader";

import Client_TechBlog_Content from "@/app/(main)/(tech)/[id]/Client_Content";
import Client_ShareBtns from "@/app/(main)/(tech)/[id]/Client_ShareBtns";
import Client_Recomment from "@/app/(main)/(tech)/[id]/Client_Recomment";

export default async function JapanBlog_Tech_Single_Page() {
  return (
    <div className="px-10 pb-40 w-full h-full flex flex-col justify-start items-start gap-20">
      <TechPostHeader imageUrl="/public/image/LogoImage.png" />
      <div className="w-full h-fit flex flex-col jusitfy-start items-start">
        <div className="w-full h-40 flex justify-start items-center">
          <div className="w-1/2 h-full flex justify-start items-center">
            <h1 className="font-pretendard font-semibold text-5xl text-black">
              Test
            </h1>
          </div>
          <div className="w-1/2 h-full flex justify-end items-center gap-4">
            <span className="font-pretendard font-semibold text-lg text-black">
              조회 수
            </span>
            <span className="font-pretendard font-semibold text-lg text-black">
              5
            </span>
          </div>
        </div>
      </div>
      <div className="px-10 w-full h-fit flex flex-col justify-center items-center">
        <Client_TechBlog_Content />
      </div>
      <div className="w-full flex justify-center items-center">
        <Client_ShareBtns id={1} />
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-10">
        <h2 className="font-pretendard font-bold text-3xl text-black">
          추천 포스트
        </h2>
        <Client_Recomment />
      </div>
    </div>
  );
}
