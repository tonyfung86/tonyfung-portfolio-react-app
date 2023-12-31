import { Col } from "react-bootstrap";
import IconBox from "./IconBox";

const skills = [
  {
    id: 1,
    title: "react",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
  },
  {
    id: 2,
    title: "html5",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
  },
  {
    id: 3,
    title: "css3",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
  },
  {
    id: 4,
    title: "bootstrap",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg",
  },
  {
    id: 5,
    title: "javascript",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: 6,
    title: "node.js",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    id: 7,
    title: "php",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    id: 8,
    title: "github",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
  },
  {
    id: 9,
    title: "git",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
  },
  {
    id: 10,
    title: "mysql",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  },
];

const SkillList = () => {
  return (
    <>
      {skills.map((skill) => {
        return (
          <Col
            xs={4}
            sm={2}
            md={3}
            lg={2}
            key={skill.id}
            className="center-content"
          >
            <IconBox icon={skill.link} alt={skill.title + " icon"} />
          </Col>
        );
      })}
    </>
  );
};

export default SkillList;
