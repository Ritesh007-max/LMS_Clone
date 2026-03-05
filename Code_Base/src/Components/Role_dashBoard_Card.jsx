import React from "react";

function Role_dashBoard_Card({ title, discription }) {
  return (
    <>
      <div className="flex flex-col text-start p-5 gap-1 border-1 border-white/10 bg-white/5 rounded-xl w-120 text-white">
        <h1 className="font-semibold text-white">{title}</h1>
        <p>{discription}</p>
      </div>
    </>
  );
}

export default Role_dashBoard_Card;
