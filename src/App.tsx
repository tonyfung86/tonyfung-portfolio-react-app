//import Message from "./Message";
// import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
// import Button from "./components/Button";
// import { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Container from "react-bootstrap/Container";
import top from "./img/top.jpg";
// import middle from "./img/middle.jpg";
import bottom from "./img/bottom.jpg";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";

let items = ["US", "JP", "HK", "TW", "UK", "CA"];

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  // const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <Parallax pages={3}>
        <ParallaxLayer
          style={{ backgroundImage: `url(${top})`, backgroundSize: "cover" }}
        >
          <Container>
            <h1>This is the top of the page</h1>
          </Container>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.9}
          speed={0.1}
          style={{ backgroundImage: `url(${bottom})`, backgroundSize: "cover" }}
        >
          <Container>
            <ListGroup
              items={items}
              heading={"List 1"}
              onSelectItem={handleSelectItem}
            />
          </Container>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.7}
          speed={1}
          style={{ backgroundImage: `url(${top})` }}
        >
          <Container>
            <ListGroup
              items={items}
              heading={"List 2"}
              onSelectItem={handleSelectItem}
            />
          </Container>
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={0.1}>
          <Container>
            <h2>This is bottom</h2>
          </Container>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
