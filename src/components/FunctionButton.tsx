import { ReactNode } from "react";
import Button from "react-bootstrap/Button";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const FunctionButton = ({ children, color = "primary", onClick }: Props) => {
  return (
    <>
      <Button
        className="btn-function"
        variant={"outline-" + color}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  );
};

export default FunctionButton;
