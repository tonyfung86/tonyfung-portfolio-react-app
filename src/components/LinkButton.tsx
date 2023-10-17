import { ReactNode } from "react";
import Button from "react-bootstrap/Button";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  link?: string;
}

const LinkButton = ({ link, children, color = "primary" }: Props) => {
  return (
    <>
      <a href={link}>
        <Button className="btn-function" variant={"outline-" + color}>
          {children}
        </Button>
      </a>
    </>
  );
};

export default LinkButton;
