import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { selectFriend } from "../../app/store/slices/friend";
import { selectPost } from "../../app/store/slices/post";
import { FriendType, PostType } from "../../typing.d";
import LoadingSpinner from "../LoadingSpinner";

const Stories = () => {
  const { stories } = useSelector(selectPost);
  const { friendList, mainProfile } = useSelector(selectFriend);

  return (
    <div>
      {stories.length < 1 && <LoadingSpinner />}
      {stories.length > 0 && (
        <div className="stories-container">
          {/* -------------------------- user-story -------------------------- */}

          <div className="story">
            <div className="row-span-3 overflow-hidden img-base hover:scale-110 transition-all z-0">
              <Image
                src={mainProfile.picture}
                width={350}
                height={500}
                layout="responsive"
                className="img-base z-0"
                alt={mainProfile.firstName}
              />
            </div>
            <div className="row-span-1 bg-primaryMediumDark z-10 flex items-center justify-center relative">
              <button className="icon-btn bg-accentMain border-4 border-primaryMediumDark absolute -top-5 left-1/2 -translate-x-1/2">
                <FontAwesomeIcon icon={faAdd} />
              </button>
              <p className="text-xs font-semibold">Create Story</p>
            </div>
          </div>

          {/* ------------------------ friends-stories ----------------------- */}

          {stories &&
            stories.map((story: PostType, index: number) => {
              if (index < 4) {
                return (
                  <div
                    key={story.id}
                    className={index === 0 ? "story story-last" : "story"}
                  >
                    <div className="absolute w-full h-full top-0 left-0 img-base hover:scale-110 transition-all z-0">
                      <Image
                        priority={index === stories.length - 1 ? true : false}
                        quality={50}
                        src={story.image}
                        width={350}
                        height={700}
                        layout="responsive"
                        className="img-base z-0"
                      />
                    </div>
                    <Link href="/profile">
                      <button className="img-icon absolute top-2 left-2 border-accentMain border-4 rounded-full">
                        <Image
                          src={story.owner.picture}
                          width={50}
                          height={50}
                          layout="responsive"
                          className="img-base rounded-full"
                          alt={story.owner.firstName}
                        />
                      </button>
                    </Link>
                    <div className="row-start-4 row-span-1 bg-primaryMediumDark bg-opacity-50 z-10 flex items-end justify-start p-2 relative">
                      <p className="text-xs font-semibold">{`${story.owner.firstName} ${story.owner.lastName}`}</p>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      )}
    </div>
  );
};

export default Stories;
