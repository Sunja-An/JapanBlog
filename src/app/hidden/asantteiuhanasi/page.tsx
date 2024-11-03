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
        <div className="w-full h-40">
          <span className="font-PretendardJP font-bold text-2xl text-black">
            To. あっさん
          </span>
        </div>
        <div className="w-full h-full flex flex-col">
          <span className="font-PretendardJP font-bold text-xl text-black">
            俺だよ。まあ、エモい雰囲気で持っていきたくないが一応手紙だからな
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            俺的にはせいやが高校生でも普通に友達儀式すごかったし俺の目線で。大人に見えるって言っても過言ではない。
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            普通に俺が今まで多い人々をあってきたんだけどお前みたいに関係がシンプルな人はあんまりいなかったぞ。これは考えることが多くなかったっていうこと。
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            だからせいやとゲームできて結構楽しめたぞ、ただゲームがうまいからじゃなく人として楽しかった。あおりとかも充分素晴らしかったしねｗ。
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            まあ、これから日本に行って会うけど以前言った通り会えないかもしれないからな。
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            お前なら悩みとかないんだと思うけど俺もそんなにまともな人間じゃないからねｗｗ相談聞くぐらいならいつでも出来るから連絡はたまにやろうよ。
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            それが悩みじゃなくってもね。
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            せいやのおかげでいい思い出作って勉強集中するわ。感謝はしとく。
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            俺的に君にやってあげたことはなかったけどたまにメンタル的に弱くなってた時手伝ってくれてありがとうね。
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            詳しい言葉は広島とか会ってからやろうぜ。手紙はここまで。本当にありがとう。
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
