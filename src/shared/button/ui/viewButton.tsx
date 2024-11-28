"use client";

import React from "react";

interface IViewButton {
  content: string;
}

function ViewButton(props: IViewButton) {
  return <button>{props.content}</button>;
}

export { ViewButton };
