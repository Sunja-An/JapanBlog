import Client_PhotoCard from "@/app/Client_PhotoCard";
import Client_Category from "@/app/Client_Category";

export default async function JapanBlog_Blog_Page() {
  return (
    <main className="px-3 pb-40 w-full h-fit flex flex-col justify-start items-start">
      <section className="w-full h-screen flex justify-center items-center">
        <div className="relative w-11/12 h-full">
          <Client_PhotoCard sort="tech" linkId={0} pictureUrl="" />
        </div>
      </section>
      <section className="w-full h-screen flex flex-col justify-center items-center shrink">
        <Client_Category />
      </section>
    </main>
  );
}
