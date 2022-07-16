import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

interface Props {
  text: string;
  iconClass?: string;
  icon: IconProp;
}
const IconTextButton = ({ text, icon }: Props) => {
  return (
    <button className="icon-round-text-btn text-textMedium">
      <FontAwesomeIcon icon={icon} className={`text-xl w-8`} />
      <p className="text-textMedium font-normal text-sm">{text}</p>
    </button>
  );
};

export default IconTextButton;
