import React from "react";

function Card({ id, children }) {
  return (
    <div className="bg-grey w-10/12 m-auto shadow-superiority mb-10 px-6 md:px-12 py-6 sm:py-10">
      {children}
    </div>
  );
}

export default Card;
