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
            To. ポンポン (AI)
          </span>
        </div>
        <div className="w-full h-full flex flex-col">
          <span className="font-PretendardJP font-bold text-xl text-black">
            おい、ポム。俺だぜ
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            最初ポムと会って良かったと思うのは女性でも気楽に遊べることだった！お前いいやつなだ！って思う。
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            でもたまに傷つくし弱いところもたまに見えて心配してるけどね。
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            以前ヂィスコード抜けたとき心配はしてたけど！お前感情調節しろ！怖いって！！
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            まあ、ポムがしんどい時に俺は何もしてあげたことないけど、俺的に感情が丸見えだとなめらるし、それで人を判断しちゃう人があって心配してる。。！
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            そしてお前は笑うときに一番光ってるぞ。俺のくだらない冗談でも笑ってくれるし。いいやつすぎる！
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            恋愛はうまくできなかった時結構厳しく言ったけど、その時もっと力になる言葉してあげたらどうだったかなって今でも思うわ。
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            その時はごめんね、一人で盛り上がっちゃったよｗｗ。。恋愛は幸せになるためにやるんだ！
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            まあ、ふざけてるのはここまでにして、ポムとも1年遊んだけど何でこんなに短いなん？？？？もううち二十代中盤だって。。俺が先だけどねｗｗｗｗ
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            たまに連絡送るけどなくってもあんまりこいつだる！とか思うなよ！彼氏いる人に連絡送る事態が俺にはそんなにできないって！こういうの厳しいタイプです。
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            そして健康が一番だ。だから周りの目線じゃなくって自分だけ考えてやりな。今も充分よくやってるけど！
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            でも俺そんなにまともじゃないけどこんな言葉言っていいのかな？まあ、いいや。
          </span>
          <span className="font-PretendardJP font-bold text-xl text-black">
            時間できたらまた東京で遊ぼ。お前その時までお大事にしろよ。じゃなー
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
