import { NotionFrontEndBlogDatabase } from "@/shared";
import { BlogList } from "@/widgets/blog";

async function BlogListView() {
  const data = await NotionFrontEndBlogDatabase();
  if (typeof window === undefined) {
    return (
      <div className="w-screen h-screen">
        <div className=""></div>
      </div>
    );
  }
  if (data === false) {
    return (
      <div className="w-screen h-screen">
        <div className=""></div>
      </div>
    );
  } else {
    return (
      <div className="pb-32 w-full flex justify-center items-center">
        <BlogList data={data} />
      </div>
    );
  }
}

export { BlogListView };
