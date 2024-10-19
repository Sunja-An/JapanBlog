import TechPostHeader from "@/layout/techBlog/TechPostHeader";

export default async function JapanBlog_Tech_Single_Page() {
  return (
    <main className="w-full h-full flex flex-col justify-start items-start gap-20">
      <TechPostHeader imageUrl="/public/image/LogoImage.png" />
      <section className="w-full h-fit flex flex-col jusitfy-start items-start">
        <div className="w-full h-40 flex justify-start items-center">
          <div className="w-1/2 h-full flex justify-start items-center">
            <h1 className="font-pretendard font-semibold text-5xl text-black">
              Test
            </h1>
          </div>
          <div className="w-1/2 h-full flex justify-end items-center">
            <span className="font-pretendard font-semibold text-sm text-black">
              조회 수
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
