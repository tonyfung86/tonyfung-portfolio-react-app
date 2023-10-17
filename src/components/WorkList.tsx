import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import stylized from "../img/stylized.jpg";
import govweb from "../img/govweb.jpg";

const works = [
  {
    id: 1,
    img: govweb,
    title: "Government website development",
    text: "Modernization of different legacy government websites, encompassing front-end development, ongoing maintenance, and integration with a back-end Content Management System (CMS).",
  },
  {
    id: 2,
    img: stylized,
    title: "Image stylize app",
    text: "An android project of an social media application with image stylize and basic photo editing function.",
  },
];

const WorkList = () => {
  return (
    <>
      {works.map((work) => {
        return (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={4}
            key={work.id}
            className="center-content"
          >
            <Card
              style={
                {
                  /*width: "18rem"*/
                }
              }
            >
              <Card.Img variant="top" src={work.img} />
              <Card.Body>
                <Card.Title>{work.title}</Card.Title>
                <Card.Text>{work.text}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

export default WorkList;
