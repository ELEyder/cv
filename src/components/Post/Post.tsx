import { Timestamp } from "firebase/firestore";
import styles from "./Post.module.css";
import { useNavigate } from "react-router-dom";
interface PropPost {
  id: string;
  title: string;
  dateCreate: Timestamp;
  content: string;
  type: "generic";
}

const Post = ({ id, title, dateCreate, content, type }: PropPost) => {
  const navigate = useNavigate()
  const img =
    type == "generic" ? "img/posts/generic.jpg" : "img/posts/generic.jpg";
  return (
    <div className={styles.post} onClick={()=>navigate(`/blog/${id}`)}>
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
