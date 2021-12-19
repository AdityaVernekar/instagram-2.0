import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  EmojiHappyIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ id, username, userimg, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* header */}

      <div className="flex items-center p-5">
        <img
          src={userimg}
          alt=""
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* img */}
      <img src={img} className="object-cover w-full" alt="" />

      {/* Buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn rotate-45" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* caption */}
      <div>
        <p className="p-5 truncate">
          <span className="font-bold mr-4">{username}</span>
          {caption}
        </p>
      </div>

      {/* comments */}

      {/* input box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7 w-7 mr-2" />
        <input
          type="text"
          className="flex-1 border-none focus:ring-0 outline-none "
          placeholder="Post a comment.."
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
}

export default Post;
