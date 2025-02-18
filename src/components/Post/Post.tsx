import styles from "./Post.module.css";
import { useNavigate } from "react-router-dom";
import type { IBlog } from "../../types/IBlog";
import { Image } from "antd";

const Post = ({ id, title, dateCreate, content, type }: IBlog) => {
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
        <p className={styles.date}>{dateCreate.toDate().toLocaleString()}</p>
        <p className={styles.summary}>{content}</p>
      </div>
    </div>
  );
};

export default Post;
