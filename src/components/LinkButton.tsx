import { ReactNode } from "react";
import Button from "react-bootstrap/Button";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  link?: string;
}

const LinkButton = ({ children, color = "primary", link }: Props) => {
  return (
    <>
      <Button className="btn-function" variant={"outline-" + color}>
        {children}
      </Button>
    </>
  );
};

export default LinkButton;
