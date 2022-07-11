import {
  faFaceLaugh,
  faImages,
  faLaugh,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import React from "react";
import LinkImgButton from "../Buttons/LinkImgButton";

const PostingForm = () => {
  const { data: session } = useSession();
  return (
    <div className=" bg-primaryMediumDark p-3 px-5 max-w-lg mx-auto shadow-sm shadow-black rounded-md md:mt-6">
      {/* ------------------------- posting form ------------------------- */}
      <div className="grid grid-cols-10 justify-center gap-3 text-center h-10 ">
        {session?.user?.image && (
          <LinkImgButton
            src={session?.user?.image}
            href="/profile"
            imgClass="img-icon"
          />
        )}

        <button className="height-10 text-textDark hover:text-textMedium col-span-9 text-left bg-primaryMedium hover:bg-primaryMediumLight transition-all px-3 rounded-full">
          {`  What's on your mind, ${session?.user?.name}? `}
        </button>
      </div>
      <hr className="col-span-9 my-3 border-b border-primaryMedium" />
      {/* ------------------------ posting buttons ----------------------- */}
      <div className="flex items-center justify-center gap-2 text-center h-10">
        <button className="icon-btn-square w-full text-sm font-medium gap-2">
          <FontAwesomeIcon icon={faVideo} className="text-2xl text-red-500" />
          Live video
        </button>
        <button className="icon-btn-square w-full text-sm font-medium gap-2">
          <FontAwesomeIcon
            icon={faImages}
            className="text-2xl text-green-500"
          />
          Photo/Video
        </button>
        <button className="icon-btn-square w-full text-sm font-medium gap-2">
          <FontAwesomeIcon
            icon={faLaugh}
            className="text-2xl text-yellow-500"
          />
          Feeling/Activity
        </button>
      </div>
    </div>
  );
};

export default PostingForm;
