import {
  faBars,
  faHome,
  faPeopleGroup,
  faPuzzlePiece,
  faStore,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";
import React from "react";
import IconSquareButton from "../Buttons/IconSquareButton";

const NavLinks = () => {
  const { data: session } = useSession();
  return (
    <div className="nav-links-container">
      {session && (
        <div className="nav-links">
          <div className="hidden col-span-4 sm:grid grid-cols-4 h-full items-center justify-between">
            <IconSquareButton icon={faHome} text="Home" iconClass="text-xl" />
            <IconSquareButton icon={faTv} text="Watch" iconClass="text-xl" />
            <IconSquareButton icon={faStore} text="Watch" iconClass="text-xl" />
            <IconSquareButton
              icon={faPeopleGroup}
              text="Groups"
              iconClass="text-xl"
            />
          </div>
          <IconSquareButton
            icon={faPuzzlePiece}
            text="Gaming"
            iconClass="text-xl"
            hideClass="hidden xl:block"
          />
          <IconSquareButton
            icon={faBars}
            text="Watch"
            iconClass="text-3xl"
            hideClass="xl:hidden"
          />
        </div>
      )}
    </div>
  );
};

export default NavLinks;
