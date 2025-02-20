import { useNavigate } from "react-router-dom";
import { IBlog } from "../../types";
import { Image } from "antd";
import styles from "./index.module.css";

const Blog = ({ id, title, dateCreate, content, type }: IBlog) => {

  const navigate = useNavigate();

  const img =
    type == "travel"
      ? "images/posts/travel.webp"
      : type == "music"
      ? "images/posts/music.webp"
      : "images/posts/generic.webp";

  return (
    <div className={styles.post}>

      <Image
        className={styles.img}
        src={img}
        alt={type}
        fallback="./images/placeholder.webp"
      />

      <div className={styles.content} onClick={() => navigate(`/blog/${id}`)}>
        <h2>{title}</h2>
        <p>{dateCreate?.toDate().toLocaleString()}</p>
        <p>{content}</p>
      </div>

    </div>
  );
};

export default Blog;
