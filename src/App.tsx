import ListGroup from "./components/ListGroup";
import TopNav from "./components/TopNav";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import top from "./img/top.jpg";
import programmer from "./img/programmer.png";

let items = ["JavaScript", "React", "HTML", "jQuery", "XML"];

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  // const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <Parallax pages={3}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: `url(${top})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <TopNav />
        <ParallaxLayer offset={0.3} speed={1}>
          <Container>
            <Row className="ver-center">
              <Col md={7}>
                <span className="font-style1">
                  Hi,
                  <br /> I'm <span className="gradient-blue">Tony Fung</span>
                  <br />
                  <span className="font-italic">Full stack developer</span>
                  <h4>Turning Code into Solutions</h4>
                </span>
              </Col>
              <Col className="mobile-hide" md={5}>
                <Image className="icon" src={programmer} />
              </Col>
            </Row>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          //style={{ backgroundImage: `url(${bottom})`, backgroundSize: "cover" }}
        >
          <Container>
            <h1>About me</h1>
            <p>
              I'm an independent full stack developer with 2.5 year experience.
            </p>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.9}
          speed={1}
          //style={{ backgroundImage: `url(${bottom})`, backgroundSize: "cover" }}
        >
          <Container>
            <ListGroup
              items={items}
              heading={"Skills"}
              onSelectItem={handleSelectItem}
            />
          </Container>
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={0.1}>
          <Container>
            <h2>Contact me</h2>
          </Container>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
