import TopNav from "./components/TopNav";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import top from "./img/top.jpg";
import programmer from "./img/programmer.png";
import { useRef } from "react";
import ScrollButton from "./components/ScrollButton";
import FunctionButton from "./components/FunctionButton";
import InfoBox from "./components/InfoBox";
import { PiLayoutThin, PiDeviceMobileThin } from "react-icons/pi";
import { CiServer } from "react-icons/ci";
import SkillList from "./components/SkillList";

const infoIconStyles = { color: "black", fontSize: "80px" };

function App() {
  // const [alertVisible, setAlertVisibility] = useState(false);
  const parallax = useRef<IParallax>(null!);
  return (
    <>
      <Parallax ref={parallax} pages={4}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={4}
          style={{
            backgroundImage: `url(${top})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <TopNav />
        <ParallaxLayer offset={0.3} speed={0.4}>
          <Container>
            <Row id="home" className="ver-center">
              <Col md={7}>
                <span className="font-style1">
                  Hi,
                  <br /> I'm <span className="gradient-blue">Tony Fung</span>
                  <br />
                  <span className="font-italic">Full stack developer</span>
                  <h4>Turning Code into Solutions</h4>
                </span>
                <ScrollButton
                  txt={"About Me"}
                  onClick={() => parallax.current.scrollTo(1)}
                />
              </Col>
              <Col className="mobile-hide" md={5}>
                <Image className="icon" src={programmer} />
              </Col>
            </Row>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.4}>
          <Container className="content">
            <h1 id="about" className="title">
              ABOUT ME
            </h1>
            <Row>
              <Col sm={10} md={8} lg={7}>
                <p>
                  I am a result-driven programmer with 2.5 years of experience
                  in website development. Throughout my career, I have
                  consistently demonstrated that I am responsible, reliable, and
                  able to deliver high-quality software products.
                </p>
                <p>
                  I established strong working relationships, fostered open
                  communication, and collaborated effectively with clients and
                  colleagues to achieve successful outcomes.
                </p>
              </Col>
            </Row>
            <FunctionButton
              children={"Download Resume"}
              onClick={() => {
                window.open("./src/document/TonyFung_Resume.pdf", "_blank");
              }}
            />
          </Container>

          <Container className="content">
            <h1 id="services" className="title">
              MY SERVICES
            </h1>
            <Row>
              <Col md={6} lg={4}>
                <InfoBox
                  icon={<PiLayoutThin style={infoIconStyles} />}
                  title={"Frontend"}
                  text={
                    "I specialize in frontend development to bring your web projects to life. With a passion for creating visually stunning and user-friendly interfaces, I offer a range of frontend services tailored to meet your needs."
                  }
                />
              </Col>
              <Col md={6} lg={4}>
                <InfoBox
                  icon={<PiDeviceMobileThin style={infoIconStyles} />}
                  title={"Mobile App Development"}
                  text={
                    "Creating custom mobile applications that run seamlessly on both iOS and Android platforms. My mobile app development services encompass a wide range of skills and technologies to bring your app ideas to life."
                  }
                />
              </Col>
              <Col md={6} lg={4}>
                <InfoBox
                  icon={<CiServer style={infoIconStyles} />}
                  title={"Backend"}
                  text={
                    "As a backend developer, I specialize in the core infrastructure and functionality that power web applications. My backend development services are designed to ensure that your web projects are secure, efficient, and scalable."
                  }
                />
              </Col>
            </Row>
          </Container>

          <Container className="content">
            <h1 id="skills" className="title">
              SKILLS
            </h1>
            <h4>I have experience with these technologies</h4>
            <Row>
              <SkillList />
            </Row>
          </Container>
          <Container className="content">
            <h1 id="contact" className="title">
              CONTACT ME
            </h1>
            <h2>
              Email:{" "}
              <a href="mailto: tonyFung86@gmail.com">tonyFung86@gmail.com</a>
            </h2>
            <h2>
              Linkedin:{" "}
              <a href="https://www.linkedin.com/in/tony-fung-7942bb250/">
                https://www.linkedin.com/in/tony-fung-7942bb250/
              </a>
            </h2>
            <h2>Tel: (647) 594-1957</h2>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.4}></ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
