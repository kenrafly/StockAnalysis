import React from "react";

const Card = ({ children }) => {
  return (
    <div className="relative w-full h-full rounded-xl p-4 border-2">
      {children}
    </div>
  );
};

export default Card;
