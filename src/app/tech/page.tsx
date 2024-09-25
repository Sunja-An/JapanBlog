import { Get_Tech_Blog_List } from "@/action/tech.action";

export default async function JapanBlog_Tech_Blog_List_Page() {
  const data = await Get_Tech_Blog_List();
  return (
    <div className="">
      <div></div>
    </div>
  );
}
