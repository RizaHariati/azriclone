import React from "react";

interface Props {
  openMenu: {
    status: boolean;
    menuTitle: string;
  };
}

const CreateMenu = ({ openMenu }: Props) => {
  return (
    <div
      className={`menu-list ${
        openMenu.status && openMenu.menuTitle === "Create"
          ? "h-96 py-5"
          : "h-0 py-0"
      } `}
    >
      MainMenu
    </div>
  );
};

export default CreateMenu;
