import { faTrash } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { InView, useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { selectFriend } from "../../../app/store/slices/friend";
import { addMoreComments, selectPost } from "../../../app/store/slices/post";
import { CommentType } from "../../../typing.d";
import IconButton from "../../Buttons/IconButton";
import LinkImgTextButton from "../../Buttons/LinkImgTextButton";

interface Props {
  openMenu: {
    status: boolean;
    menuTitle: string;
  };
}

const config = {
  method: "GET",
  headers: { "app-id": process.env.KEYWORD_API || "key" },
};

const NotificationMenu = ({ openMenu }: Props) => {
  const { data: session } = useSession();
  const { comments, commentPage } = useSelector(selectPost);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const { ref, inView } = useInView();

  useEffect(() => {
    fetchData();
  }, [inView]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://dummyapi.io/data/v1/comment/?limit=10&page=" + commentPage,
        config
      );
      const data = await res.json();
      if (data.data) {
        dispatch(addMoreComments(comments.concat(data.data)));
        setTimeout(() => {}, 1000);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = () => {
    console.log(commentPage, " delete");
  };
  return (
    <div
      className={`menu-list z-20 ${
        openMenu.status && openMenu.menuTitle === "Notification"
          ? "p-5"
          : "py-0"
      } `}
      style={
        openMenu.status && openMenu.menuTitle === "Notification"
          ? { height: "85vh" }
          : { height: "0vh" }
      }
    >
      <h3 className=" text-textLight text-xl font-semibold">Notifications</h3>
      <hr className="w-full my-3 border-b border-primaryMedium" />
      <div className="notifications-container">
        {comments.map((comment: CommentType, index: number) => {
          const date = moment(comment.publishDate).format("LL");
          if (comments.length - 1 === index) {
            return (
              <div key={comment.id} ref={ref}>
                <p className="text-sm">{comment.message}</p>
              </div>
            );
          } else {
            return (
              <div
                key={comment.id}
                className="grid grid-cols-9 cursor-pointer items-center hover:bg-primaryMedium p-2 rounded-md transition-all group"
              >
                <div className="object-full object-center w-14 h-14 col-span-2 rounded-full overflow-hidden  ">
                  <Image
                    src={comment.owner.picture}
                    alt={comment.owner.firstName}
                    width={60}
                    height={60}
                    className="img-base rounded-full"
                  />
                </div>
                <div className="text-sm col-span-6">
                  <p>
                    {comment.owner.firstName} {comment.owner.lastName}{" "}
                    commented:
                  </p>
                  <p>"{comment.message} "</p>
                  <p className="text-xs text-textDark">{date} </p>
                </div>
                <IconButton
                  text="delete"
                  icon={faTrash}
                  btnClass="icon-btn hidden group-hover:block"
                  onClick={() => handleDelete()}
                />
              </div>
            );
          }
        })}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default NotificationMenu;
