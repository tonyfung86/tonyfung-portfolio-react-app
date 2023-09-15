import ListGroup from "./components/ListGroup";
import TopNav from "./components/TopNav";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Container from "react-bootstrap/Container";
import top from "./img/top.jpg";

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
            <h1>Hi,</h1>
            <h1>I'm Tony Fung</h1>
            <h1>Full stack developer</h1>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.7}
          speed={1}
          //style={{ backgroundImage: `url(${bottom})`, backgroundSize: "cover" }}
        >
          <Container>
            <h1>About me</h1>
            <p>I'm an independent full stack developer</p>
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
