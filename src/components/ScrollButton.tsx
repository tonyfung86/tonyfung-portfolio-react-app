import Button from "react-bootstrap/Button";

interface Props {
  txt: string;
  onClick: () => void;
}

const ScrollButton = ({ txt, onClick }: Props) => {
  return (
    <Button
      className="btn-function"
      variant="outline-primary"
      onClick={onClick}
    >
      {txt}
    </Button>
  );
};

export default ScrollButton;
