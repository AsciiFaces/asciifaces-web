import React from "react";

function Navigation() {
  return (
    <div className="absolute flex h-14 justify-between items-center w-full z-50 px-8 sm:mt-2">
      <div className="flex-grow"></div>
      <button className="nav-btn">About</button>
      <button className="nav-btn">Opensea</button>
      <button className="nav-btn">Connect</button>
    </div>
  );
}

export default Navigation;
