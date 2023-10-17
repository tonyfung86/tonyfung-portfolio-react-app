import TopNav from "./components/TopNav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import programmer from "./img/programmer.png";
//import { useRef } from "react";
// import ScrollButton from "./components/ScrollButton";
import InfoBox from "./components/InfoBox";
import SliderBlock from "./components/SliderBlock";
import { PiLayoutThin, PiDeviceMobileThin } from "react-icons/pi";
import { CiServer } from "react-icons/ci";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import SkillList from "./components/SkillList";
import Resume from "./document/TonyFung_Resume.pdf";
// import LinkButton from "./components/LinkButton";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import HomeButton from "./components/HomeButton";
import WorkList from "./components/WorkList";

const infoIconStyles = { color: "black", fontSize: "80px" };

function App() {
  // const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <TopNav />
      <HomeButton icon={<MdKeyboardDoubleArrowUp />} />
      <div className="blue-blur-gb">
        <SliderBlock classes={"slider block1"} scrollTo={"about"}>
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
                <a
                  href="#about"
                  className="btn-function btn btn-outline-primary"
                >
                  About Me
                </a>
              </Col>
              <Col className="mobile-hide" md={5}>
                <Image className="icon" src={programmer} />
              </Col>
            </Row>
          </Container>
        </SliderBlock>

        <SliderBlock classes={"slider block2"} scrollTo={"services"}>
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
            <a href={Resume} className="btn-function btn btn-outline-primary">
              Download Resume
            </a>
          </Container>
        </SliderBlock>

        <SliderBlock classes={"slider block3"} scrollTo={"skills"}>
          <Container className="content ">
            <h1 id="services" className="title">
              MY SERVICES
            </h1>
            <Row>
              <Col md={4} lg={4}>
                <InfoBox
                  icon={<PiLayoutThin style={infoIconStyles} />}
                  title={"Frontend"}
                  text={
                    "I specialize in frontend development to bring your web projects to life. With a passion for creating visually stunning and user-friendly interfaces, I offer a range of frontend services tailored to meet your needs."
                  }
                />
              </Col>
              <Col md={4} lg={4}>
                <InfoBox
                  icon={<CiServer style={infoIconStyles} />}
                  title={"Backend"}
                  text={
                    "As a backend developer, I specialize in the core infrastructure and functionality that power web applications. My backend development services are designed to ensure that your web projects are secure, efficient, and scalable."
                  }
                />
              </Col>
              <Col md={4} lg={4}>
                <InfoBox
                  icon={<PiDeviceMobileThin style={infoIconStyles} />}
                  title={"Mobile App Development"}
                  text={
                    "Creating custom mobile applications that run seamlessly on both iOS and Android platforms. My mobile app development services encompass a wide range of skills and technologies to bring your app ideas to life."
                  }
                />
              </Col>
            </Row>
          </Container>
        </SliderBlock>

        <SliderBlock
          classes={"slider block4 block-padding-md"}
          scrollTo={"experience"}
        >
          <Container className="content">
            <h1 id="skills" className="title">
              MY SKILLS
            </h1>
            <h4>I have experience with these technologies</h4>
            <Row>
              <SkillList />
            </Row>
          </Container>
        </SliderBlock>

        <SliderBlock classes={"slider block5"} scrollTo={"works"}>
          <Container className="content">
            <h1 id="experience" className="title">
              MY EXPERIENCE
            </h1>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#000",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="2020 - 2023"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  Analyst Programmer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  NetSoft Limited
                </h4>
                <p>
                  Web development, Front-end development, Back-end Development,
                  customer consultant
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2018 - 2020"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  Bachelor of Science (Hons.) in Computer Science
                </h3>
                <h4 className="vertical-timeline-element-subtitle"></h4>
                <p>Hong Kong Baptist University, HK</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2016 - 2018"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  Higher diploma in Software Engineering
                </h3>
                <h4 className="vertical-timeline-element-subtitle"></h4>
                <p>Vocation Training Council, HK</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Container>
        </SliderBlock>

        <SliderBlock
          classes={"slider block6 block-padding-md"}
          scrollTo={"contact"}
        >
          <Container className="content block6">
            <h1 id="works" className="title">
              MY WORKS
            </h1>
            <Row>
              <WorkList />
            </Row>
          </Container>
        </SliderBlock>

        <SliderBlock
          classes={"slider block7 block-padding-lg"}
          scrollTo={"home"}
        >
          <Container className="content">
            <h1 id="contact" className="title">
              CONTACT ME
            </h1>
            <h2 className="my-sm-5">
              Email:{" "}
              <a href="mailto: tonyFung86@gmail.com">tonyFung86@gmail.com</a>
            </h2>
            <h2 className="my-sm-5">
              Linkedin:{" "}
              <a href="https://www.linkedin.com/in/tony-fung-7942bb250/">
                https://www.linkedin.com/in/tony-fung-7942bb250/
              </a>
            </h2>
          </Container>
        </SliderBlock>
      </div>
    </>
  );
}

export default App;
