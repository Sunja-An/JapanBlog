import React from "react";

import Korea from "/svg/korea.svg";

function FlagBtns() {
  const onClickFlagSetting = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="w-full flex justify-center items-center gap-6 z-10">
      <button
        type="button"
        onClick={onClickFlagSetting}
        className="w-24 h-24 rounded-full flex flex-col justify-center items-center gap-2 bg-transparent"
      >
        <img src={Korea} alt="korea" className="" />
        <span className="font-pretendard font-semibold text-sm text-black uppercase">
          kor
        </span>
      </button>
      <button
        type="button"
        onClick={onClickFlagSetting}
        className="w-24 h-24 rounded-full flex flex-col justify-center items-center gap-2 bg-transparent"
      >
        <img src={Korea} alt="korea" className="" />
        <span className="font-pretendard font-semibold text-sm text-black uppercase">
          jpn
        </span>
      </button>
      <button
        type="button"
        onClick={onClickFlagSetting}
        className="w-24 h-24 rounded-full flex flex-col justify-center items-center gap-2 bg-transparent"
      >
        <img src={Korea} alt="korea" className="" />
        <span className="font-pretendard font-semibold text-sm text-black uppercase">
          eng
        </span>
      </button>
    </div>
  );
}

export { FlagBtns };
