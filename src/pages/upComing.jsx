import React, { useState } from "react";
import MainPart from "../styledComponets/MainPart";
import { HeartTwoTone } from "@ant-design/icons";

export default function UpComing() {
  const [iconColor, setIconColor] = useState("blue");
  const handleIconClick = () => {
    setIconColor("red");
  };
  let content = (
    <HeartTwoTone
      className="fa fa-heart"
      style={{ backgroundColor: iconColor }}
      onClick={handleIconClick}
    />
  );

  return (
    <MainPart>
      {content}
      {content} {content}{" "}
    </MainPart>
  );
}
