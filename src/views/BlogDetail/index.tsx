import styles from "./indes.module.css";
import { db } from "../../firestore/app";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Timestamp } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

interface Blog {
  id: string;
  title: string;
  content: string;
  dateCreate: Timestamp;
  type: "generic";
}

function Blog() {
  const { id } = useParams<{ id?: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    if (!id) {
      setLoading(false);
      return;
    }
    try {
      const docRef = doc(db, "blogs", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBlog({ id: docSnap.id, ...docSnap.data() } as Blog);
        setLoading(false);
      } else {
        console.error("No se encontró el blog");
      }
    } catch (error) {
      console.error("Error fetching blogs: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <Loading />
  if (!blog) return <p>Blog no encontrado</p>;

  const img =
    blog.type == "generic" ? "img/posts/generic.jpg" : "img/posts/generic.jpg";
  return (
    <>
      <section className={styles.main}>
        <div
          className={styles.title}
          style={{
            backgroundImage: `linear-gradient(var(--shadown), var(--shadown)), url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1>{blog.title}</h1>
          <p className={styles.date}>
            {blog.dateCreate.toDate().toLocaleString()}
          </p>
        </div>
        <section className={styles.blog}>
          <div className={styles.content}>
            <p>{blog.content}</p>
          </div>
        </section>
      </section>
    </>
  );
}

export default Blog;
