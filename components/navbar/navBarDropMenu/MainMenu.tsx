import React from "react";

interface Props {
  openMenu: {
    status: boolean;
    menuTitle: string;
  };
}

const MainMenu = ({ openMenu }: Props) => {
  return (
    <div
      className={`menu-list ${
        openMenu.status && openMenu.menuTitle === "Main"
          ? "h-96 py-5"
          : "h-0 py-0"
      } `}
    >
      MainMenu
    </div>
  );
};

export default MainMenu;
