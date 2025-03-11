import styles from "./index.module.css";
import { Tooltip } from "antd";
import { ReactComponent as ReactIcon } from "../../assets/tech/react.svg";
import { ReactComponent as Spring } from "../../assets/tech/spring.svg";
import { ReactComponent as Node } from "../../assets/tech/node.svg";
import { ReactComponent as MySQL } from "../../assets/tech/mysql.svg";
import { ReactComponent as Firebase } from "../../assets/tech/firebase.svg";
import { ReactComponent as PHP } from "../../assets/tech/php.svg";
import { ReactComponent as Figma } from "../../assets/tech/figma.svg";
import { ReactComponent as TS } from "../../assets/tech/ts.svg";
import { ReactComponent as Tailwind } from "../../assets/tech/tailwind.svg";
import { ReactComponent as Git } from "../../assets/tech/git.svg";
import { ReactComponent as Java } from "../../assets/tech/java.svg";

const Skills = () => {
  const SKILLS = [
    {
      name: "React",
      icon: <ReactIcon className={styles.react} />
    },
    {
      name: "Typescript",
      icon: <TS className={styles.ts}/>,
    },
    {
      name: "Node Js",
      icon: <Node className={styles.node}/>,
    },
    {
      name: "Java",
      icon: <Java className={styles.java}/>,
    },
    {
      name: "Spring",
      icon: <Spring className={styles.spring}/>,
    },
    {
      name: "PHP",
      icon: <PHP className={styles.php}/>,
    },
    {
      name: "MySQL",
      icon: <MySQL className={styles.mysql}/>,
    },
    {
      name: "Firebase",
      icon: <Firebase className={styles.firebase}/>,
    },
    {
      name: "Tailwind",
      icon: <Tailwind className={styles.tailwind}/>,
    },
    {
      name: "Git",
      icon: <Git className={styles.git}/>,
    },
    {
      name: "Figma",
      icon: <Figma className={styles.figma}/>,
    },
  ];
  return (
    <>
      <section className={styles.skills} id="skills">
        <h1>Habilidades</h1>
        <div className={styles.tools}>
          {SKILLS.map((skill, index) => {
            return (
              <Tooltip key={index} title={skill.name}>
                <div className={styles.tool}>
                {skill.icon}
                </div>
              </Tooltip>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Skills;