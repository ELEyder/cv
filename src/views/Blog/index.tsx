import styles from "./indes.module.css";
import { db } from "../../firestore/app";
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { Timestamp } from "firebase/firestore";
import Post from "../../components/Post/Post";
// Definir la interfaz para un blog
interface Blog {
  id: string;
  title: string;
  content: string;
  dateCreate: Timestamp;
  type: "generic";
}

function Blog() {
  // Especificar que blogs es un arreglo de objetos que cumplen con la interfaz Blog
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      setBlogs(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Blog)));
    } catch (error) {
      console.error("Error fetching blogs: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className={styles.blog} id="blog">
        <div className={styles.content}>
          <h1>One Blog</h1>
        </div>
      </section>
      <section className={styles.blogs} id="blogs">
          {blogs.map((blog) => {
            return (
              <Post key={blog.id} title={blog.title} content={blog.content} dateCreate={blog.dateCreate} type={blog.type}/>
            );
          })}
      </section>
    </>
  );
}

export default Blog;
