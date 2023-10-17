import { ReactNode } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface Props {
  icon: string;
  title: string;
  text: ReactNode;
}

const WorkBox = ({ icon, title, text }: Props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={icon} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default WorkBox;
