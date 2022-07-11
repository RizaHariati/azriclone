import {
  faAdd,
  faBell,
  faListDots,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import React from "react";
import { useSelector } from "react-redux";
import { selectFriend } from "../../app/store/slices/friend";

import IconButton from "../Buttons/IconButton";
import LinkImgButton from "../Buttons/LinkImgButton";

const NavMenu = () => {
  const { data: session } = useSession();
  const { mainProfile } = useSelector(selectFriend);
  const route = useRouter();

  return (
    <div className="nav-menu-container">
      <div className="nav-menu ">
        {session && (
          <>
            <IconButton
              icon={faAdd}
              text="Create"
              btnClass="icon-btn xl:hidden"
            />
            <IconButton
              icon={faListDots}
              text="Menu"
              btnClass="icon-btn hidden xl:block"
            />
            <IconButton icon={faMessage} text="Messenger" />
            <IconButton icon={faBell} text="Notification" />
          </>
        )}

        {mainProfile.picture && (
          <LinkImgButton
            src={
              session?.user?.image
                ? mainProfile.picture
                : "/images/profile/profile.png"
            }
            href={session ? "/profile" : "/"}
            text={session ? "Your Profile" : "Login"}
            imgClass="img-icon"
          />
        )}
      </div>
    </div>
  );
};

export default NavMenu;
