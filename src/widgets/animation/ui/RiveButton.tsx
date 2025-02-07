"use client";

import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import { useRouter } from "next/navigation";
import React from "react";

function RiveButton() {
  const router = useRouter();

  const stateMachineName = "Foot";
  const stateMachineInputName = "pressed";
  const { rive, RiveComponent } = useRive({
    src: "FootAnimation.riv",
    stateMachines: stateMachineName,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain, // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.Center,
    }),
  });
  const PressedInput = useStateMachineInput(
    rive,
    stateMachineName,
    stateMachineInputName
  );

  const onClickBtn = () => {
    PressedInput?.fire();
    setTimeout(() => {
      router.push("/blog");
    }, 1000);
  };

  return (
    <button
      type="button"
      className="w-60 h-20 flex justify-center items-center gap-4 rounded-full bg-linearground shadow-xl"
      onClick={onClickBtn}
    >
      <div className="w-20 h-20 flex justify-center items-center">
        <RiveComponent />
      </div>
      <span className="font-pretendard font-extralight text-base text-black uppercase">
        start
      </span>
    </button>
  );
}

export { RiveButton };
