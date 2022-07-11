import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LinkImgButton from "../Buttons/LinkImgButton";

const LogoSearch = () => {
  const [openSearch, setopenSearch] = useState<boolean>(false);
  const { data: session } = useSession();
  return (
    <div className="logo-search-container ">
      <div className="logo-search">
        {!openSearch && (
          <LinkImgButton
            src="/images/websiteImages/Logo.png"
            href="/"
            text="Home"
            imgClass="img-icon"
          />
        )}

        {session && (
          <>
            {openSearch && (
              <button
                onClick={() => setopenSearch(false)}
                className="h-10 w-12 bg-transparent hover:bg-primaryMedium rounded-full"
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="text-lg text-textMedium"
                />
              </button>
            )}
            <form className="h-10 w-10 2xl:w-72 bg-primaryMedium flex items-center justify-start rounded-full overflow-clip transition-all relative outline-none group hover:bg-primaryMediumLight">
              <button className="icon-btn absolute group-hover:bg-primaryMediumLight group-focus-within:hidden">
                <FontAwesomeIcon icon={faSearch} />
              </button>
              <input
                onFocus={() => setopenSearch(true)}
                type="text"
                placeholder="Search AzriClone"
                className="absolute hidden 2xl:block left-10 h-full w-full group-focus-within:left-0 px-2 text-textMedium bg-transparent transition-all active:ring-0 active:bg-primaryMedium group-hover:bg-primaryMediumLight"
              />
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LogoSearch;
