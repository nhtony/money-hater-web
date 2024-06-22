import React from "react";
import { IconPlus } from "..";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center fixed inset-x-0 bottom-0 max-w-md mx-auto max-h-16 h-16 bg-white shadow-2xl rounded-md">
      <div className="flex justify-center items-center bg-pink-500 rounded-full w-10 h-10 shadow-2xl">
        <IconPlus />
      </div>
    </div>
  );
};

export default NavBar;
