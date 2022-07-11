import {
  faCircle,
  faEllipsis,
  faGlobeAsia,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React from "react";
import { FriendType } from "../../typing.d";
import LinkImgButton from "../Buttons/LinkImgButton";

interface HeaderProps {
  owner: FriendType;
  published: string;
}
const PostHeader = ({ owner, published }: HeaderProps) => {
  const date = moment(published).format("LL");
  return (
    <div className="grid grid-cols-9 gap-2 px-5 ">
      <LinkImgButton
        src={owner.picture}
        href="/profile"
        imgClass="img-icon m-0 p-0"
      />

      <div className=" col-span-7 text-textMedium text-sm font-medium    cursor-pointer hover:underline-offset-2 underline-offset-auto ">
        <h4>{`${owner.firstName} ${owner.lastName}`}</h4>
        <p className="flex gap-2 items-center text-textDark text-xs">
          {date}
          <FontAwesomeIcon icon={faCircle} style={{ fontSize: "3px" }} />
          <FontAwesomeIcon icon={faGlobeAsia} className="text-xs" />
        </p>
      </div>
      <button className="icon-btn bg-primaryMediumDark hover:bg-primaryMedium">
        <FontAwesomeIcon icon={faEllipsis} className="text-xl" />
      </button>
    </div>
  );
};
export default PostHeader;
