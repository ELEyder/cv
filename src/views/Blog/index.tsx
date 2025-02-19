import styles from "./indes.module.css";
import { db } from "../../services/firestore/app";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Post from "../../components/Blog/Blog";
import type { IBlog } from "../../types/IBlog";
// Definir la interfaz para un blog

function Blog() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      setBlogs(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as IBlog))
      );
    } catch (error) {
      console.error("Error fetching blogs: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className={styles.blogs}>
        <div className={styles.head}>
        <h1>One Blog</h1>
        <p>Un vistazo personal al fascinante mundo de la tecnología.</p>

        </div>
        <div className={styles.content}>
          {blogs.map((blog) => {
            return (
              <Post
                key={blog.id}
                id={blog.id}
                title={blog.title}
                content={blog.content}
                dateCreate={blog.dateCreate}
                type={blog.type}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Blog;
