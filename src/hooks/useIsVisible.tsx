"use client";

import React from "react";

export default function useIsVisible(ref: React.RefObject<any>) {
  const [isIntersecting, setIsIntersecting] = React.useState<boolean>(false);

  // IntersectionObserver 설명
  React.useEffect(() => {
    // 이는 Event 가 local state variable 로 들어갈 때, isIntersecting 속성을 유지하도록 해준다.

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    // 객체의 모든 Event를 감시한다.
    observer.observe(ref.current);
    // 또한 Event 가 끝날 때, 관찰을 중지.
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
