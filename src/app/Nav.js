import React from "react";

export default function Nav() {
  return (
    <div className="sticky h-10 bg-white">
      <ul className="text-black flex justify-end ">
        <li className="mx-5">Home</li>
        <li className="mx-5">About</li>
        <li className="mx-5">Blog</li>
      </ul>
    </div>
  );
}
