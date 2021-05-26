import React from "react";

function Button({ children }) {
  return (
    <button className="border bg-grey bg-white px-2 p-1 flex-grow-0 text-xxs font-pixelated ml-6 shadow-superiority transition duration-300 hover:shadow-none hover:transform hover:translate-x-1 hover:translate-y-1">
      {children}
    </button>
  );
}

function Navigation() {
  return (
    <div className="absolute flex h-14 justify-between items-center w-full z-50 px-8">
      <div className="flex-grow"></div>
      <Button>About</Button>
      <Button>Opensea</Button>
      <Button>Connect</Button>
    </div>
  );
}

export default Navigation;
