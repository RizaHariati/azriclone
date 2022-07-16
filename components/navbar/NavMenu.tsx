import {
  faAdd,
  faBell,
  faListDots,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectFriend } from "../../app/store/slices/friend";

import IconButton from "../Buttons/IconButton";
import ImgButton from "../Buttons/ImgButton";
import LinkImgTextButton from "../Buttons/LinkImgTextButton";
import CreateMenu from "./navBarDropMenu/CreateMenu";
import MainMenu from "./navBarDropMenu/MainMenu";
import NotificationMenu from "./navBarDropMenu/NotificationMenu";
import ProfileMenu from "./navBarDropMenu/ProfileMenu";

const NavMenu = () => {
  const { data: session } = useSession();
  const { mainProfile } = useSelector(selectFriend);

  const [openMenu, setopenMenu] = useState<{
    status: boolean;
    menuTitle: string;
  }>({ status: false, menuTitle: "" });

  const handleOpenMenu = (menu: string) => {
    if (openMenu.menuTitle === menu) {
      setopenMenu({ status: false, menuTitle: "" });
    } else {
      setopenMenu({ status: true, menuTitle: menu });
    }
  };

  if (mainProfile?.picture !== "") {
    return (
      <div className="nav-menu-container">
        <div className="nav-menu ">
          {session && (
            <>
              <div className="relative h-14 items-center flex xl:hidden">
                <IconButton
                  icon={faAdd}
                  text="Create"
                  btnClass="icon-btn "
                  onClick={() => {
                    handleOpenMenu("Create");
                  }}
                />
                {openMenu.status && openMenu.menuTitle === "Create" && (
                  <CreateMenu openMenu={openMenu} />
                )}
              </div>

              <div className="relative h-14 items-center  hidden xl:flex">
                <IconButton
                  icon={faListDots}
                  text="Menu"
                  btnClass="icon-btn"
                  onClick={() => {
                    handleOpenMenu("Main");
                  }}
                />
                {openMenu.status && openMenu.menuTitle === "Main" && (
                  <MainMenu openMenu={openMenu} />
                )}
              </div>

              <div className="relative h-14 items-center flex">
                <IconButton
                  icon={faBell}
                  text="Notification"
                  onClick={() => {
                    handleOpenMenu("Notification");
                  }}
                />
                {openMenu.status && openMenu.menuTitle === "Notification" && (
                  <NotificationMenu openMenu={openMenu} />
                )}
              </div>
            </>
          )}

          <div className="relative h-fit items-center flex">
            {session && mainProfile?.picture !== "" && (
              <ImgButton
                src={mainProfile?.picture}
                text={session ? "Your Profile" : "Login"}
                imgClass="img-icon"
                onClick={() => {
                  if (session) {
                    handleOpenMenu("Profile");
                  }
                }}
              />
            )}

            {openMenu.status && openMenu.menuTitle === "Profile" && (
              <ProfileMenu openMenu={openMenu} />
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default NavMenu;
