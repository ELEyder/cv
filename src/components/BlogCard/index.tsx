import { useNavigate } from "react-router-dom";
import { IBlog } from "../../types";
import { Image } from "antd";
import styles from "./index.module.css";

const Blog = ({ id, title, dateCreate, content, type }: IBlog) => {

  const navigate = useNavigate();

  const img =
    type == "travel"
      ? "img/posts/travel.gif"
      : type == "music"
      ? "img/posts/music.gif"
      : "img/posts/generic.jpg";

  return (
    <div className={styles.post}>

      <Image
        className={styles.img}
        src={img}
        alt={type}
        fallback="./img/placeholder.png"
      />

      <div className={styles.content} onClick={() => navigate(`/blog/${id}`)}>
        <h2>{title}</h2>
        <p>{dateCreate.toDate().toLocaleString()}</p>
        <p>{content}</p>
      </div>

    </div>
  );
};

export default Blog;
