import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faChevronRight,
  faCircleQuestion,
  faExclamationTriangle,
  faGear,
  faMessage,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { resetStore } from "../../../app/store";
import { selectFriend } from "../../../app/store/slices/friend";
import { settingData, supportData } from "../../../data/navbar-menu-data";
import IconButton from "../../Buttons/IconButton";
import IconTextButton from "../../Buttons/IconTextButton";
import LinkImgTextButton from "../../Buttons/LinkImgTextButton";

interface Props {
  openMenu: {
    status: boolean;
    menuTitle: string;
  };
}

const ProfileMenu = ({ openMenu }: Props) => {
  const { data: session } = useSession();
  const { mainProfile } = useSelector(selectFriend);
  const [openSide, setOpenSide] = useState<{
    status: boolean;
    sidemenu: string;
  }>({ status: false, sidemenu: "" });

  const handleOpenSide = (menu: string) => {
    if (openSide.sidemenu === menu) {
      setOpenSide({ status: false, sidemenu: "" });
    } else {
      setOpenSide({ status: true, sidemenu: menu });
    }
  };

  const handleLogout = async () => {
    await resetStore();
    signOut();
  };
  return (
    <div className="menu-list h-fit ">
      <div
        className={`h-fit w-full p-5 relative ${
          openSide.status && openSide.sidemenu === "support"
            ? "h-60 overflow-hidden"
            : "h-fit"
        }`}
      >
        <Setting openSide={openSide} handleOpenSide={handleOpenSide} />
        <Support openSide={openSide} handleOpenSide={handleOpenSide} />
        <div>
          <LinkImgTextButton
            href="/profile"
            src={
              mainProfile.picture
                ? mainProfile.picture
                : "/images/profile/profile.png"
            }
            text={session?.user?.name ? session.user.name : "user"}
            icon="img-icon"
            buttonClass="icon-round-text-btn-lg"
          />
          <hr className="w-full my-3 border-b border-primaryMedium" />
          <button
            className="icon-round-text-btn-lg h-12 group justify-between"
            onClick={() => handleOpenSide("setting")}
          >
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faGear}
                className="h-11 w-4 p-2 bg-primaryMedium group-hover:bg-primaryMediumLight rounded-full"
              />
              <p className="font-normal text-sm tracking-wide text-textLight">
                Setting & Privacy
              </p>
            </div>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="h-11 w-4 p-2 text-xl"
            />
          </button>

          <button
            className="icon-round-text-btn-lg h-12 group justify-between"
            onClick={() => handleOpenSide("support")}
          >
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faCircleQuestion}
                className="h-11 w-4 p-2 bg-primaryMedium group-hover:bg-primaryMediumLight rounded-full"
              />
              <p className="font-normal text-sm tracking-wide text-textLight">
                Help & Support
              </p>
            </div>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="h-11 w-4 p-2 text-xl"
            />
          </button>

          <button
            className="icon-round-text-btn-lg h-12 group justify-between"
            onClick={() => handleOpenSide("feedback")}
          >
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                className="h-11 w-4 p-2 bg-primaryMedium group-hover:bg-primaryMediumLight rounded-full"
              />
              <p className="font-normal text-sm tracking-wide text-textLight">
                Help & Support
              </p>
            </div>
          </button>

          <button
            className="icon-round-text-btn-lg h-12 group justify-between"
            onClick={() => handleLogout()}
          >
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faSignOut}
                className="h-11 w-4 p-2 bg-primaryMedium group-hover:bg-primaryMediumLight rounded-full"
              />
              <p className="font-normal text-sm tracking-wide text-textLight">
                Logout
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;

interface SettingProps {
  openSide: {
    status: boolean;
    sidemenu: string;
  };
  handleOpenSide: (menu: string) => void;
}

const Setting = ({ openSide, handleOpenSide }: SettingProps) => {
  return (
    <div
      className={`absolute w-full h-fit bg-primaryMediumDark z-20 transition-all rounded-md p-5 ${
        openSide.status && openSide.sidemenu === "setting"
          ? "left-0 top-0 "
          : "left-full top-0"
      }`}
    >
      <div className="flex gap-3 items-center">
        <IconButton
          icon={faArrowLeft}
          text="Create"
          btnClass="icon-btn "
          onClick={() => handleOpenSide("setting")}
        />
        <p>Setting & Privacy</p>
      </div>
      <hr className="w-full my-3 border-b border-primaryMedium" />
      <div>
        {settingData.map(
          (data: { text: string; icon: IconProp }, index: number) => {
            return (
              <IconTextButton key={index} text={data.text} icon={data.icon} />
            );
          }
        )}
      </div>
    </div>
  );
};

const Support = ({ openSide, handleOpenSide }: SettingProps) => {
  return (
    <div
      className={`absolute w-full h-60 bg-primaryMediumDark z-20 transition-all rounded-md p-5 ${
        openSide.status && openSide.sidemenu === "support"
          ? "left-0 top-0 "
          : "left-full top-0"
      }`}
    >
      <div className="flex gap-3 items-center">
        <IconButton
          icon={faArrowLeft}
          text="Create"
          btnClass="icon-btn "
          onClick={() => handleOpenSide("support")}
        />
        <p>Setting & Privacy</p>
      </div>
      <hr className="w-full my-3 border-b border-primaryMedium" />
      <div>
        {supportData.map(
          (data: { text: string; icon: IconProp }, index: number) => {
            return (
              <IconTextButton key={index} text={data.text} icon={data.icon} />
            );
          }
        )}
      </div>
    </div>
  );
};
