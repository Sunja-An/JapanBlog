import { isBlockObjectResponse } from "@/shared";
import { SingleNotionData } from "@/shared/action/notionBlogList.action";

async function SingleBlogView({ id }: { id: string }) {
  const item = await SingleNotionData(id);
  console.log(item);
  if (item !== false) {
    console.log(item);
    return <div className=""></div>;
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
