import { SingleNotionData } from "@/shared/action/notionBlogList.action";
import { SingleBlogViewer } from "@/widgets/blog";

async function SingleBlogView({ id, title }: { id: string; title: string }) {
  const item = await SingleNotionData(id);
  if (item !== false) {
    return (
      <div className="pb-40 w-full flex flex-col justify-start items-start gap-8">
        <span className="font-pretendard font-black text-3xl text-foreground">
          {title ?? "No Data"}
        </span>
        <SingleBlogViewer items={item.results} />
      </div>
    );
  } else {
    return (
      <div className="">
        <span className="font-pretendardJP font-bold text-5xl text-white">
          데이터가 잘 불러와지지 않았습니다.
        </span>
      </div>
    );
  }
}

export { SingleBlogView };
