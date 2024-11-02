import { Get_Tech_Blog_List } from "@/action/tech.action";
import SmallCard from "@/components/card/SmallCard";
import TechPostLine from "@/layout/techBlog/TechPostLine";
import Client_MainTechPost from "@/app/tech/Client_MainTechPost";

import Test from "@/test/MainTechPostTest.json";

export default async function JapanBlog_Tech_Blog_List_Page() {
  const data = await Get_Tech_Blog_List();
  return (
    <div className="w-full h-fit flex flex-col justify-start items-start gap-40">
      <div className="w-full h-fit flex justify-center items-center">
        <Client_MainTechPost
          id={1}
          imageUrl={Test.imageUrl}
          title={Test.title}
          content={Test.content}
        />
      </div>
      <TechPostLine
        title="Next.js"
        link="/tech/list/Next.js"
        posts={[
          <SmallCard
            id={0}
            pictureUrl="/public/image/jitori.jpeg"
            title="this is test"
            content="this is test"
          />,
          <SmallCard
            id={1}
            pictureUrl="/public/image/jitori.jpeg"
            title="this is test"
            content="this is test"
          />,
        ]}
      />
      <TechPostLine
        title="Typescript"
        link="/tech/list/Typescript"
        posts={[
          <SmallCard
            id={2}
            pictureUrl="/public/image/jitori.jpeg"
            title="this is test"
            content="this is test"
          />,
          <SmallCard
            id={3}
            pictureUrl="/public/image/jitori.jpeg"
            title="this is test"
            content="this is test"
          />,
        ]}
      />
      <TechPostLine
        title="React.js"
        link="/tech/list/React"
        posts={[
          <SmallCard
            id={4}
            pictureUrl="/public/image/jitori.jpeg"
            title="this is test"
            content="this is test"
          />,
          <SmallCard
            id={5}
            pictureUrl="/public/image/jitori.jpeg"
            title="this is test"
            content="this is test"
          />,
        ]}
      />
    </div>
  );
}
