import Debouncer from "@/utils/Debouncer";
import { useEffect, useRef, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiYoutubemusic } from "react-icons/si";
import { BsFacebook } from "react-icons/bs";
import { FaCalendarAlt, FaTelegram } from "react-icons/fa";
import dynamic from "next/dynamic";
import { PopupButton } from "react-calendly";
import FloatingMenuButton from "./FloatingMenuButton";
import accounts from "@/constants/accounts";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const FloatingMenu = () => {
  const [showYoutubePlayer, setShowYoutubePlayer] = useState(false);
  const [bodyElement, setBodyElement] = useState<HTMLElement>();

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

  useEffect(() => {
    setBodyElement(document.body);
  }, []);

  if (!bodyElement) {
    return <></>;
  }

  return (
    <div className="fixed flex justify-center items-end overflow-hidden bottom-0 left-0 p-4 right-0 pointer-events-none z-20">
      <div className="w-full max-w-5xl flex flex-col items-end gap-2">
        <FloatingMenuButton color="text-violet-500">
          <div className="relative">
            <FaCalendarAlt />
            <div className="absolute bottom-0 left-0 right-0 top-0 opacity-0">
              <PopupButton
                url={accounts.calendly}
                rootElement={bodyElement}
                text="ca"
              />
            </div>
          </div>
        </FloatingMenuButton>

        <FloatingMenuButton
          color="text-blue-500"
          onClick={() => window.open(accounts.facebook)}
        >
          <BsFacebook />
        </FloatingMenuButton>

        <FloatingMenuButton
          color="text-green-500"
          onClick={() => window.open(accounts.whatsapp)}
        >
          <IoLogoWhatsapp />
        </FloatingMenuButton>

        <FloatingMenuButton
          color="text-blue-400"
          onClick={() => window.open(accounts.telegram)}
        >
          <FaTelegram />
        </FloatingMenuButton>

        <FloatingMenuButton
          color="text-red-500"
          onClick={() => setShowYoutubePlayer(true)}
        >
          <SiYoutubemusic />
        </FloatingMenuButton>

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
