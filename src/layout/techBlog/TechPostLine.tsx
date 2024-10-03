import Link from "next/link";

interface ITechPostLine {
  title: string;
  link: string;
  posts: React.ReactNode[];
}

export default function TechPostLine({ title, link, posts }: ITechPostLine) {
  return (
    <div className="w-full h-60 flex justify-center items-center gap-40">
      <div className="w-40 h-full flex flex-col justify-center items-center gap-10">
        <span className="font-pretendard font-semibold text-2xl text-black">
          {title}
        </span>
        <Link
          className="font-pretendard font-normal text-xl text-blue-400"
          href={link}
        >
          👉 전체 게시물 보기
        </Link>
      </div>
      <div className="w-2/3 h-full flex justify-center items-center gap-20">
        {posts.map((item) => {
          return item;
        })}
      </div>
    </div>
  );
}
