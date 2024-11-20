// * Components
import Client_Post_Source from "@/app/(main)/(tech)/tech/Client_Post_Source";
import Pagination from "@/components/pagination/Pagination";
import SearchBar from "@/components/searchBar/SearchBar";
import SortOption from "@/components/searchBar/SortOption";

// * Type
import { TPagination } from "@/types/PaginationType";

// * Utils
import { getTechTag } from "@/utils/techTag";

export default async function JapanBlog_TechBlog_List_Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { tag: string };
}) {
  const { tag } = searchParams;
  const index = getTechTag(tag);
  return (
    <div className="w-full w-min-96 h-fit flex flex-col justify-start items-start gap-5">
      <div className="w-full h-20 flex justify-center items-center">
        <span className="font-pretendard font-bold text-2xl text-black">
          전체 글 목록
        </span>
      </div>
      <div className="w-full flex justify-center items-center">
        <SearchBar />
      </div>
      <div className="w-full flex justify-end items-center">
        {/* <SortOption /> */}
      </div>
      <div className="w-full h-fit gap-3">
        <Client_Post_Source
          id={1}
          title="hi"
          author="hi"
          likedCount={5}
          viewCount={5}
          atModified={"Feb 5"}
        />
        <Client_Post_Source
          id={2}
          title="hi"
          author="hi"
          likedCount={5}
          viewCount={5}
          atModified={"Feb 5"}
        />
        <Client_Post_Source
          id={1}
          title="hi"
          author="hi"
          likedCount={5}
          viewCount={5}
          atModified={"Feb 5"}
        />
        <Client_Post_Source
          id={1}
          title="hi"
          author="hi"
          likedCount={5}
          viewCount={5}
          atModified={"Feb 5"}
        />
        <Client_Post_Source
          id={1}
          title="hi"
          author="hi"
          likedCount={5}
          viewCount={5}
          atModified={"Feb 5"}
        />
      </div>
      <div className="w-full flex justify-center items-center">
        <Pagination />
      </div>
    </div>
  );
}
