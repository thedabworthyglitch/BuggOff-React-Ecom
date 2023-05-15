import React from "react";
import Image from "next/image";
function HeaderButton({Icon, text}) {
  return (
    <div>
        <Icon className="h-7 mx-auto stroke-1" />
        <p className="text-md text-center">{text}</p>
    </div>
  );
}

export default HeaderButton;