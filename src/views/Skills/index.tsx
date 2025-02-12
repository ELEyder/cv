import styles from "./index.module.css";
import { Image, Tooltip } from "antd";
import { ReactComponent as React } from "../../assets/tech/react.svg";
import { ReactComponent as Spring } from "../../assets/tech/spring.svg";
import { ReactComponent as Node } from "../../assets/tech/node.svg";
import { ReactComponent as MySQL } from "../../assets/tech/mysql.svg";
import { ReactComponent as Firebase } from "../../assets/tech/firebase.svg";
import { ReactComponent as DJango } from "../../assets/tech/django.svg";
import { ReactComponent as PHP } from "../../assets/tech/php.svg";
import { ReactComponent as GitHub } from "../../assets/contact/github.svg";
import { ReactComponent as Internet } from "../../assets/contact/internet.svg";

function Projects() {
  const SKILLS = [
    {
      name: "React",
      icon: <React />,
    },
  ];
  return (
    <>
      <section className={styles.skills} id="skills">
        <h1>Habilidades</h1>
        <div className={styles.cards}>
          {SKILLS.map((skill) => {
            return (
              <Tooltip title={skill.name}>
                {skill.icon}
              </Tooltip>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Projects;
