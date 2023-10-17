import { ReactNode } from "react";

interface Props {
  classes: string;
  scrollTo: string;
  children: ReactNode;
}

const SliderBlock = ({ classes, scrollTo, children }: Props) => {
  const handleClick = () => {
    const targetSection = document.getElementById(scrollTo);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={classes} onClick={handleClick}>
      {children}
    </div>
  );
};

export default SliderBlock;
