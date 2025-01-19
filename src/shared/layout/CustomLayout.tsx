import React from "react";
import { Hamburger } from "../components/hamburger/Hamburger";
import { Outlet } from "react-router-dom";

type T_CustomLayout = {
  isHamburger: boolean;
};

function CustomLayout({ isHamburger }: T_CustomLayout) {
  return (
    <div className="w-screen h-screen flex justify-start items-center">
      {isHamburger && (
        <section className="fixed left-0 top-0">
          <Hamburger />
        </section>
      )}
      <section className={`${isHamburger && "ml-24"}`}>
        <Outlet />
      </section>
    </div>
  );
}

export { CustomLayout };
