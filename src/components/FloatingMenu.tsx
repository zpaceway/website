import Debouncer from "@/utils/Debouncer";
import { useEffect, useRef, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiYoutubemusic } from "react-icons/si";
import { BsFacebook } from "react-icons/bs";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const FloatingMenu = () => {
  const [showYoutubePlayer, setShowYoutubePlayer] = useState(false);

  const onScroll = useRef<() => void>();
  const debouncer = useRef(new Debouncer());

  useEffect(() => {
    onScroll.current &&
      document.removeEventListener("scroll", onScroll.current);

    if (showYoutubePlayer) {
      onScroll.current = () => {
        debouncer.current.exec(() => {
          setShowYoutubePlayer(false);
        });
      };

      document.addEventListener("scroll", onScroll.current);
    }

    return () => {
      onScroll.current &&
        document.removeEventListener("scroll", onScroll.current);
    };
  }, [showYoutubePlayer]);

  return (
    <div className="fixed flex justify-center items-end overflow-hidden bottom-0 left-0 p-4 right-0 pointer-events-none z-20">
      <div className="w-full max-w-5xl flex flex-col items-end gap-4">
        {!showYoutubePlayer && (
          <>
            <div
              onClick={() =>
                window.open("https://www.facebook.com/alexandrotapiaflores")
              }
              className="cursor-pointer p-1 text-blue-500 bg-white rounded-full pointer-events-auto text-4xl hover:rotate-12"
            >
              <BsFacebook />
            </div>
            <div
              onClick={() => window.open("https://wa.me/593998775709")}
              className="cursor-pointer p-1 text-green-500 bg-white rounded-full pointer-events-auto text-4xl hover:rotate-12"
            >
              <IoLogoWhatsapp />
            </div>
            <div
              onClick={() => setShowYoutubePlayer(true)}
              className="cursor-pointer p-1 text-red-500 bg-white rounded-full pointer-events-auto text-4xl hover:rotate-12"
            >
              <SiYoutubemusic />
            </div>
          </>
        )}

        {showYoutubePlayer && (
          <div
            className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 z-10 pointer-events-auto"
            onClick={() => setShowYoutubePlayer(false)}
          ></div>
        )}

        <div
          className={`overflow-hidden w-60 h-40 z-20 pointer-events-auto ${
            showYoutubePlayer ? "block" : "hidden"
          }`}
        >
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            className="rounded-full"
            url="https://www.youtube.com/watch?v=jfKfPfyJRdk"
          />
        </div>
      </div>
    </div>
  );
};

export default FloatingMenu;