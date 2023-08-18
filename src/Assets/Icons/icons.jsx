import React from "react";
import { BsPersonFillAdd, BsPencilFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { LuFilterX } from "react-icons/lu";
import { BsFillCalendarHeartFill } from "react-icons/bs";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { MdOutlineNavigateNext } from "react-icons/md";


function Icon({ type, size, color, m}) {
  switch (type) {
    case "add":
      return <BsPersonFillAdd size={size} color={color} />;
    case "edit":
      return <BsPencilFill size={size} color={color} />;
    case "delete":
      return <MdDeleteForever size={size} color={color} />;
    case "filter":
      return <LuFilterX size={size} color={"white"} />;
    case "date":
      return  <BsFillCalendarHeartFill size={20} color="white" className="me-2" />
    case "data":
        return <BsFillHeartPulseFill size={20} color="white" style={{ backgroundColor: "#171D45" }} className="me-2" />
    case "next": 
        return <MdOutlineNavigateNext color="white" style={{ color: "#fff" }} size={25} className={m} />
    default:
      return null;
  }
}

export default Icon;
