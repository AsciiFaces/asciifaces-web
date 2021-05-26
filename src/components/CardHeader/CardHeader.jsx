import React from "react";

function CardHeader({ children, text }) {
  return <h2 className="text-xl sm:text-3xl font-semibold mb-4">{text}</h2>;
}

export default CardHeader;
