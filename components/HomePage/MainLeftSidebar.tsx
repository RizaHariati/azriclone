import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import { mainLeftLinks, mainShortcuts } from "../../data/main-data";
import ExtLinkTextButton from "../Buttons/ExtLinkTextButton";
import LinkIconTextButton from "../Buttons/LinkIconTextButton";
import LinkImgTextButton from "../Buttons/LinkImgTextButton";

type IconTextBtn = {
  name: string;
  icon: IconProp;
  href: string;
  color: string;
};

type ExtTextBtn = {
  name: string;
  href: string;
  src: string;
};

const MainLeftSidebar = () => {
  const { data: session } = useSession();
  const [openMenuList, setOpenMenuList] = useState<boolean>(false);
  return (
    <div className="main-left-sidebar">
      {/* ------------------------- main profile ------------------------- */}
      <LinkImgTextButton
        href="/profile"
        src={
          session?.user?.image
            ? session.user.image
            : "/images/profile/profile.png"
        }
        text={session?.user?.name ? session.user.name : "user"}
        icon=""
      />

      {/* ---------------------- main menu shortcuts --------------------- */}
      <div
        className={
          openMenuList ? "h-fit overflow-hidden" : "h-72 overflow-hidden"
        }
      >
        {mainLeftLinks.map((link: IconTextBtn, index: number) => {
          return (
            <LinkIconTextButton
              key={index}
              href={link.href}
              text={link.name}
              icon={link.icon}
              color={link.color}
            />
          );
        })}
      </div>
      <button
        className="icon-round-text-btn group"
        onClick={() => setOpenMenuList(!openMenuList)}
      >
        <FontAwesomeIcon
          icon={openMenuList ? faChevronUp : faChevronDown}
          className="h-11 w-4 p-2 bg-primaryMedium group-hover:bg-primaryMediumLight rounded-full"
        />
        <p className="font-semibold">
          {openMenuList ? "See less" : "See more"}
        </p>
      </button>
      <hr className="w-full my-3 border-b border-primaryMedium" />
      {/* ----------------------- custom shortcuts ----------------------- */}
      <div>
        <h4 className="text-base text-textDark">Your shorcuts</h4>
        {mainShortcuts.map((shortcut: ExtTextBtn, index: number) => {
          return (
            <ExtLinkTextButton
              key={index}
              href={shortcut.href}
              text={shortcut.name}
              src={shortcut.src}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainLeftSidebar;
