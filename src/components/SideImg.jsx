import React from "react";
import sideImg from "../assets/side2.png";
const SideImg = ({ img }) => {
  return (
    <div className="h-100 w-25 ">
      <img src={sideImg} alt="side image" className="w-100" />
    </div>
  );
}
export default SideImg;