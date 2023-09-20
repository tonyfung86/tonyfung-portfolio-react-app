import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  text: ReactNode;
}

const InfoBox = ({ icon, title, text }: Props) => {
  return (
    <div className="infoBox text-center">
      <div className="infoIcon">{icon}</div>
      <div className="infoContent">
        <div className="infoTitle">
          <h3>{title}</h3>
        </div>
        <div className="infoText">{text}</div>
      </div>
    </div>
  );
};

export default InfoBox;
