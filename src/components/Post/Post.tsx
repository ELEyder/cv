import { Timestamp } from "firebase/firestore";
import styles from "./Post.module.css";
interface PropPost {
  title: string;
  dateCreate: Timestamp;
  content: string;
  type: "generic";
}

const Post = ({ title, dateCreate, content, type }: PropPost) => {
  const img =
    type == "generic" ? "img/posts/generic.jpg" : "img/posts/generic.jpg";
  return (
    <div className={styles.post}>
      <img className={styles.img} src={img} alt={type} />
      <div className={styles.content}> 
      <h2>{title}</h2>
      <p className={styles.date}>{dateCreate.toDate().toLocaleString()}</p>
      <p className={styles.summary}>{content}</p>
      </div>
    </div>
  );
};

export default Post;
