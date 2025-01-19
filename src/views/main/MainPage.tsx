import Logo from "/logo/miercat.jpg";
import { FlagBtns } from "../../widgets";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const router = useNavigate();
  const onClickBlog = () => {
    router("/blog");
  };
  return (
    <main className="relative w-screen h-screen flex flex-col justify-start items-center gap-8 bg-japanblog-gradient">
      <div className="mt-20" />
      <div className="w-full flex justify-center items-center">
        <span className="font-pretendard font-bold text-5xl text-black">
          SONU
        </span>
      </div>
      <div className="w-full flex justify-center items-center">
        <button
          type="button"
          onClick={onClickBlog}
          className="w-24 h-16 flex justify-center items-center rounded-xl bg-transparent shadow-lg"
        >
          <span className="font-pretendard font-semibold text-sm text-black uppercase">
            blog
          </span>
        </button>
      </div>
      <div className="w-full flex justify-center items-center">
        <FlagBtns />
      </div>
      <div className="absolute bottom-0">
        <img src={Logo} alt="logo" className="w-96 h-96" />
      </div>
    </main>
  );
}

export { MainPage };
