"use client";

import React from "react";

export default function page() {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const onClickLetter = (e: any) => {
    setIsClicked(true);
  };
  if (!isClicked) {
    return (
      <svg
        width={100}
        height={100}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-bounce cursor-pointer"
        onClick={onClickLetter}
      >
        <title />
        <g data-name="mail email e-mail letter" id="mail_email_e-mail_letter">
          <path d="M28,13a1,1,0,0,0-1,1v8a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V14a1,1,0,0,0-2,0v8a3,3,0,0,0,.88,2.12A3,3,0,0,0,6,25H26a3,3,0,0,0,2.12-.88A3,3,0,0,0,29,22V14A1,1,0,0,0,28,13Z" />
          <path d="M15.4,18.8a1,1,0,0,0,1.2,0L28.41,9.94a1,1,0,0,0,.3-1.23,3.06,3.06,0,0,0-.59-.83A3,3,0,0,0,26,7H6a3,3,0,0,0-2.12.88,3.06,3.06,0,0,0-.59.83,1,1,0,0,0,.3,1.23ZM6,9H26a.9.9,0,0,1,.28,0L16,16.75,5.72,9A.9.9,0,0,1,6,9Z" />
        </g>
      </svg>
    );
  } else {
    return (
      <div className="px-20 py-20 w-5/6 h-5/6 flex flex-col justify-start items-start bg-gradient-to-b from-[#CCCCCC] to-[#CCCCCC] shadow-2xl rounded-xl">
        <div className="mb-5 w-full h-40">
          <span className="font-PretendardJP font-bold text-2xl text-black">
            To. リオルアニキ ( 大和亮平 )
          </span>
        </div>
        <div className="w-full h-full flex flex-col">
          <span className="font-PretendardJP font-bold text-xl text-black">
            おい、アニキ。俺やで。いつもご苦労様だな。
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            俺的にはアニキと仲良くなったのが1年たったけどね。随分遊んでたなｗｗｗ。1年ってこんなに短かったけ。
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            その間お陰様で本当に楽しく遊んでました。本当にありがとうございました。
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            最初はアニキっていう人が計算的な人だと思ったけど俺なりには結構人に優しい人なのは分かった。
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            これ悪口じゃないよ！！！ただ俺が勝手にそう考えただけ。。言い方が何かそうだった気がする
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            でも話つずけたらいい人なのはわかった気がするね。義損っていうか頼りになりました。23歳人生で何が正しいかわかんなかったけどアニキと喋りながら解決方法とか自分で探せるようになりました。アニキにはそれに関して話してないけどね！
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            絶対アニキなら覚えてないんだと思うけどねｗｗ日本人ていう人達に対して学んでそして態度とかも色々学びました。
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            そしてそれはあったぞ！アニキならわかってるはずなんだけど俺人勝手に消したりするのは！！ただ俺が傷つくないからだよ。。それは分かって欲しい。
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            どこまで許されるのかわかんなかったけどアニキの駐在の言葉があったから謝ることとかそういうのが誤解たまる前に謝るように出来ました。ありがとうございました。
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            海外の人としても友達としても仲良く遊んでくれてありがとうございました。最近結構感情的にキツイ日々なので態度とか悪かったかもしれないんですけどその部分はご理解お願いします。。
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            とにかくたまに遊びに来るんだと思うんですけど、今までみたいにそんなに来れないのでこうやって手紙みたいに
            New Code　書いてますｗｗｗ
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            えっと、そろそろ他の人も書きに行くのでここでお終いです。ありがとうございました。
          </span>
        </div>
        <div className="w-full h-40 flex justify-end">
          <span className="font-Pretendard font-bold text-2xl text-black">
            From. 선우
          </span>
        </div>
      </div>
    );
  }
}
