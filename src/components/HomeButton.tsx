import { ReactNode, useEffect, useState } from "react";

interface Props {
  icon: ReactNode;
}

const HomeButton = ({ icon }: Props) => {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.scrollY > 430); // Show the button when scrolled down 430 pixels or more
  };

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleVisibleButton);
    };
  }, []);

  return (
    <div
      className={`homeBtn ${showGoTop ? "visible" : ""}`}
      onClick={handleScrollUp}
    >
      <span className="infoIcon">{icon}</span>
    </div>
  );
};

export default HomeButton;
