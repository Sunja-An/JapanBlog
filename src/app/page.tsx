import { MiercatPopUp, NameTitle, RiveButton } from "@/widgets/animation";

export default function Home() {
  return (
    <div className="relative max-w-screen w-screen min-h-screen h-screen flex justify-start items-start bg-linearground overflow-hidden">
      <div className="py-40 w-full flex flex-col justify-start items-center gap-8">
        <NameTitle />
        <RiveButton />
      </div>
      <MiercatPopUp />
    </div>
  );
}
