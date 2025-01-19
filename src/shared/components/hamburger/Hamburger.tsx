import { useNavigate } from "react-router-dom";

function Hamburger() {
  const router = useNavigate();
  const onClickHamburger = (url: string) => {
    router(`/${url}`);
  };
  return (
    <header className="px-5 py-5 w-24 h-full flex flex-col justify-start items-center">
      <aside className="w-full flex flex-col justify-start items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img src="" alt="" className="" />
          </div>
          <span className="">SONU's BLOG</span>
          <span className="">
            We introduce the 3 languages that Korean, Japanese, English
          </span>
        </div>
        <nav className="">
          <ul className="">
            <li className="" onClick={() => onClickHamburger("")}></li>
            <li className="" onClick={() => onClickHamburger("")}></li>
            <li className="" onClick={() => onClickHamburger("")}></li>
          </ul>
        </nav>
      </aside>
    </header>
  );
}

export { Hamburger };
